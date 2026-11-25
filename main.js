(function () {
  'use strict';

  var D = window.DATA;
  var PX_USD = 1000;          // one pixel is $1,000
  var BAR_H = 500;            // bar height in px
  var USD_PER_X = PX_USD * BAR_H; // one horizontal pixel of the bar = $500,000

  var money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  function x(usd) { return usd / USD_PER_X; }
  function side(usd) { return Math.max(1, Math.round(Math.sqrt(usd / PX_USD))); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  // ---- sources: [[id]] becomes a numbered footnote link ----
  // footnotes are numbered in the order a reader meets them
  var srcIndex = {}, srcKnown = {}, srcCount = 0;
  D.sources.forEach(function (s) { srcKnown[s.id] = true; });
  var tokens = {};
  function fill(html) {
    if (!html) return '';
    return html
      .replace(/\[\[([a-z0-9-]+)\]\]/g, function (m, id) {
        if (!srcKnown[id]) { console.warn('Unknown source', id); return ''; }
        var n = srcIndex[id] || (srcIndex[id] = ++srcCount);
        return '<sup><a href="#src-' + id + '" aria-label="Source ' + n + '">' + n + '</a></sup>';
      })
      .replace(/\{([a-zA-Z]+)\}/g, function (m, k) { return tokens[k] != null ? tokens[k] : m; });
  }

  function short(usd) {
    if (usd >= 1e12) return '$' + (usd / 1e12).toFixed(2).replace(/\.?0+$/, '') + ' trillion';
    if (usd >= 1e9) return '$' + (usd / 1e9).toFixed(1).replace(/\.0$/, '') + ' billion';
    if (usd >= 1e6) return '$' + (usd / 1e6).toFixed(1).replace(/\.0$/, '') + ' million';
    return money.format(usd);
  }

  // ---- derived numbers ----
  var spent = D.spending.reduce(function (a, s) { return a + s.usd; }, 0);
  var remaining = D.netWorth - spent;
  tokens.netWorth = short(D.netWorth);
  tokens.netWorthFull = money.format(D.netWorth);
  tokens.barPx = Math.round(x(D.netWorth)).toLocaleString('en-US');
  tokens.barMetres = Math.round(x(D.netWorth) * 0.0254 / 96).toLocaleString('en-US');
  tokens.spent = short(spent);
  tokens.remaining = short(remaining);
  tokens.spentPct = (spent / D.netWorth * 100).toFixed(0) + '%';
  tokens.asOf = D.asOf;
  Object.keys(D.tokens || {}).forEach(function (k) { tokens[k] = D.tokens[k]; });

  // ---- headline ----
  document.querySelectorAll('[data-fill="headline"]').forEach(function (n) { n.textContent = short(D.netWorth) + '.'; });

  // ---- calibration ----
  var cal = document.getElementById('calibration');
  D.calibration.forEach(function (c) {
    var item = el('div', 'cal-item');
    var shape = el('div', 'cal-shape');
    if (c.usd >= 1e9) {
      // big amounts are drawn as a block as tall as the bar
      item.classList.add('wide');
      shape.style.width = Math.round(x(c.usd)) + 'px';
      shape.style.height = BAR_H + 'px';
      shape.innerHTML = fill(c.inside || '');
    } else {
      var s = side(c.usd);
      shape.style.width = s + 'px';
      shape.style.height = s + 'px';
    }
    item.appendChild(shape);
    var meta = el('div', 'cal-meta');
    meta.appendChild(el('div', 'cal-label', fill(c.label)));
    meta.appendChild(el('div', 'cal-value', fill(c.value || short(c.usd))));
    item.appendChild(meta);
    cal.appendChild(item);
  });

  // ---- the bar ----
  var bar = document.getElementById('bar');
  var barW = Math.round(x(D.netWorth));
  bar.style.width = barW + 'px';

  // Every text in the bar owns a stretch of it (a "zone"), from its own position
  // to the next text. Inside its zone the text sticks to the left of the screen,
  // so you can keep scrolling while you read; the next text takes over.
  var items = D.story.concat(D.tail || []).slice().sort(function (a, b) { return a.at - b.at; });
  items.forEach(function (s, i) {
    var next = items[i + 1] ? items[i + 1].at : D.netWorth;
    if (D.spendStart != null && s.at < D.spendStart) next = Math.min(next, D.spendStart);
    var left = Math.round(x(s.at));
    var width = Math.max(40, Math.round(x(next)) - left);
    tokens.here = (s.at / D.netWorth * 100).toFixed(1) + '%';

    var zone = el('div', 'zone' + (s.type === 'milestone' ? ' milestone' : ''));
    zone.style.left = left + 'px';
    zone.style.width = width + 'px';
    var inner = el('div', 'zone-inner');

    if (s.type === 'square') {
      var sq = el('div', 'shape');
      var sd = side(s.usd);
      sq.style.width = sd + 'px';
      sq.style.height = sd + 'px';
      inner.appendChild(sq);
      inner.appendChild(el('div', 'note-text', fill(s.label)));
      inner.appendChild(el('div', 'zone-value', fill(s.value || short(s.usd))));
    } else {
      if (s.type === 'milestone') inner.appendChild(el('div', 'zone-kicker', 'You just passed'));
      if (s.title) inner.appendChild(el('div', 'note-title', fill(s.title)));
      if (s.type === 'milestone') inner.appendChild(el('div', 'zone-value', fill(s.value || short(s.at))));
      if (s.html) inner.appendChild(el('div', 'note-text', fill(s.html)));
    }
    zone.appendChild(inner);
    bar.appendChild(zone);
  });

  // spending segments run back to back up to the end of the bar
  var cursor = D.netWorth - spent - (D.spendTail || 0);
  if (D.spendStart != null) cursor = D.spendStart;
  D.spending.forEach(function (s, i) {
    var seg = el('div', 'seg' + (i % 2 ? ' alt' : ''));
    seg.style.left = Math.round(x(cursor)) + 'px';
    seg.style.width = Math.max(2, Math.round(x(s.usd))) + 'px';
    var inner = el('div', 'seg-inner');
    if (s.kicker) inner.appendChild(el('div', 'seg-kicker', fill(s.kicker)));
    inner.appendChild(el('div', 'seg-title', fill(s.title)));
    inner.appendChild(el('div', 'seg-cost', fill(s.cost || short(s.usd))));
    if (s.html) inner.appendChild(el('div', 'seg-text', fill(s.html)));
    seg.appendChild(inner);
    bar.appendChild(seg);
    cursor += s.usd;
  });

  // ruler labels every $10 billion
  var ruler = document.getElementById('ruler');
  for (var v = 10e9; v < D.netWorth; v += 10e9) {
    var rl = el('div', 'ruler-label', '$' + (v / 1e9) + 'B');
    rl.style.left = Math.round(x(v)) + 'px';
    ruler.appendChild(rl);
  }

  // ---- outro, peers, actions, sources ----
  document.getElementById('outro-body').innerHTML = fill(D.outro);

  document.getElementById('peers-lede').innerHTML = fill(D.peers.lede);
  var grid = document.getElementById('peers-grid');
  var max = Math.max.apply(null, D.peers.list.map(function (p) { return p.usd; }));
  D.peers.list.forEach(function (p) {
    var row = el('div', 'peer' + (p.musk ? ' musk' : ''));
    row.appendChild(el('div', 'peer-name', fill(p.name) + '<span class="co">' + fill(p.company) + '</span>'));
    var wrap = el('div', 'peer-bar-wrap');
    var b = el('div', 'peer-bar');
    b.style.width = 'calc((100% - 110px) * ' + (p.usd / max).toFixed(5) + ')';
    if (p.usd / max < 0.002) b.style.width = '1px';
    wrap.appendChild(b);
    wrap.appendChild(el('div', 'peer-value', fill(p.value || short(p.usd))));
    row.appendChild(wrap);
    grid.appendChild(row);
  });
  if (D.peers.note) grid.appendChild(el('div', 'peers-note', fill(D.peers.note)));

  var act = document.getElementById('act-grid');
  D.actions.forEach(function (a, i) {
    var c = el('article', 'act-card' + (a.primary ? ' primary' : ''));
    c.appendChild(el('div', 'act-num', '0' + (i + 1)));
    c.appendChild(el('h3', 'act-title', fill(a.title)));
    c.appendChild(el('div', 'act-text', fill(a.html)));
    if (a.link) {
      var l = el('a', 'act-link', fill(a.linkText) + ' <span aria-hidden="true">&#8594;</span>');
      l.href = a.link; l.target = '_blank'; l.rel = 'noopener';
      c.appendChild(l);
    } else if (a.share) {
      var btn = el('button', 'act-link', fill(a.linkText));
      btn.type = 'button';
      btn.addEventListener('click', function () {
        var url = location.href.split('#')[0];
        if (navigator.share) {
          navigator.share({ title: document.title, url: url }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(function () { btn.textContent = 'Link copied'; });
        } else {
          window.prompt('Copy this link:', url);
        }
      });
      c.appendChild(btn);
    }
    act.appendChild(c);
  });

  document.getElementById('method').innerHTML = fill(D.method);
  var ol = document.getElementById('sources');
  D.sources.slice().sort(function (a, b) {
    return (srcIndex[a.id] || 999) - (srcIndex[b.id] || 999);
  }).forEach(function (s) {
    if (!srcIndex[s.id]) console.warn('Source never cited', s.id);
    var li = el('li', null, s.text + (s.url ? ' <a href="' + s.url + '" target="_blank" rel="noopener">' + s.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] + '</a>' : ''));
    li.id = 'src-' + s.id;
    ol.appendChild(li);
  });

  // ---- scroll: counter, progress, wheel to horizontal ----
  var counter = document.querySelector('.hud-counter-value');
  var prog = document.querySelector('.hud-progress');
  var progFill = document.querySelector('.hud-progress-fill');
  var ticking = false;

  function barLeft() { return bar.getBoundingClientRect().left + window.scrollX; }
  var bl = barLeft();
  window.addEventListener('resize', function () { bl = barLeft(); update(); });

  function update() {
    ticking = false;
    var pos = window.scrollX + window.innerWidth * 0.5 - bl;
    if (pos <= 0) { counter.textContent = ''; prog.classList.remove('on'); return; }
    var usd = Math.min(D.netWorth, pos * USD_PER_X);
    counter.textContent = money.format(Math.round(usd / 1e6) * 1e6);
    prog.classList.add('on');
    progFill.style.width = (usd / D.netWorth * 100).toFixed(3) + '%';
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  // a vertical mouse wheel moves the page sideways, unless a section scrolls itself
  window.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    var t = e.target.closest && e.target.closest('.outro, .peers, .act, .colophon');
    if (t && t.scrollHeight > t.clientHeight) {
      var atTop = t.scrollTop <= 0, atBottom = t.scrollTop + t.clientHeight >= t.scrollHeight - 1;
      if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return;
    }
    e.preventDefault();
    var dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
    window.scrollBy(0, 0);
    window.scrollTo(window.scrollX + dy, 0);
  }, { passive: false });

  update();
})();
