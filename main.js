(function () {
  'use strict';

  var D = window.DATA;
  var root = document.documentElement;
  // Two layouts, one scale. Desktop: the bar runs sideways and is 500 px tall.
  // Phones and touch screens: the bar runs downwards and is as wide as the
  // screen, so you scroll the way your thumb expects. 1 px is $1,000 in both.
  var V = root.classList.contains('v');
  var PX_USD = 1000;          // one pixel is $1,000
  var BAR_T = V ? Math.max(240, Math.min(500, Math.floor(root.clientWidth - 32))) : 500; // bar thickness
  var USD_PER_X = PX_USD * BAR_T; // one pixel along the bar
  root.style.setProperty('--bar-t', BAR_T + 'px');
  function place(n, start, len) {
    if (V) { n.style.top = start + 'px'; n.style.height = len + 'px'; }
    else { n.style.left = start + 'px'; n.style.width = len + 'px'; }
  }

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
      .replace(/\{([a-zA-Z0-9]+)\}/g, function (m, k) { return tokens[k] != null ? tokens[k] : m; });
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
  tokens.perTen = short(10 * USD_PER_X);
  tokens.livesPerTen = (10 * USD_PER_X / ((D.base || {}).lifetime || 2060000)).toFixed(1);
  tokens.perPx = money.format(USD_PER_X);
  tokens.barT = BAR_T;
  tokens.blockDims = V ? BAR_T + ' by ' + Math.round(1e6 / BAR_T).toLocaleString('en-US') : Math.round(1e6 / BAR_T).toLocaleString('en-US') + ' by ' + BAR_T;
  tokens.blockLen = Math.round(1e6 / BAR_T).toLocaleString('en-US') + (V ? ' pixels tall' : ' pixels wide');
  tokens.thickWord = V ? 'wide' : 'tall';
  tokens.dirWord = V ? 'down' : 'sideways';
  Object.keys(D.tokens || {}).forEach(function (k) { tokens[k] = D.tokens[k]; });

  // ---- headline ----
  document.querySelectorAll('[data-fill="headline"]').forEach(function (n) { n.textContent = short(D.netWorth) + '.'; });
  var hint = document.querySelector('.scroll-hint span');
  if (hint && V) hint.innerHTML = '&#8595;';

  // ---- calibration ----
  var cal = document.getElementById('calibration');
  D.calibration.forEach(function (c) {
    var item = el('div', 'cal-item');
    var shape = el('div', 'cal-shape');
    if (c.usd >= 1e9) {
      // big amounts are drawn as a block as tall as the bar
      item.classList.add('wide');
      shape.style.width = (V ? BAR_T : Math.round(x(c.usd))) + 'px';
      shape.style.height = (V ? Math.round(x(c.usd)) : BAR_T) + 'px';
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
  var barLen = Math.round(x(D.netWorth));
  if (V) bar.style.height = barLen + 'px'; else bar.style.width = barLen + 'px';

  // ---- what lives inside the bar ----
  // Everything in the bar is an "item" at a dollar position. Each item owns the
  // stretch of bar up to the next item (a zone) and its text stays centred on
  // screen while you scroll through that stretch. Three kinds of items:
  //   1. fixed: milestones, notes and the start of each spending block (data.js)
  //   2. chapter cards: short explainers, spread evenly over their chapter's range
  //   3. progress cards: computed "so far" lines that fill any long silence
  // rhythm is measured in screens, so it feels the same on a phone and a laptop
  var RH = D.rhythm || {};
  var screen = V ? window.innerHeight : window.innerWidth;
  var MAX_GAP = (RH.maxScreens || 4.5) * screen;   // never longer than this without a new text
  var MIN_GAP = (RH.minScreens || 1.7) * screen;   // texts never closer than this
  var all = [];

  // spending blocks: dark backgrounds, plus an intro item at the start of each
  var spendFrom = D.spendStart, spendTo = D.spendStart;
  D.spending.forEach(function (s, i) {
    var from = spendTo, to = spendTo + s.usd;
    var seg = el('div', 'seg' + (i % 2 ? ' alt' : ''));
    place(seg, Math.round(x(from)), Math.max(2, Math.round(x(s.usd))));
    bar.appendChild(seg);
    all.push({ at: from, kind: 'seg', s: s, fixed: true });
    spread(s.cards || [], from, to, s.title);
    spendTo = to;
  });

  D.story.concat(D.tail || []).forEach(function (s) { all.push({ at: s.at, kind: s.type, s: s, fixed: true }); });
  (D.chapters || []).forEach(function (c) { spread(c.cards, c.from, c.to, c.title); });

  function spread(cards, from, to, title) {
    var n = cards.length;
    cards.forEach(function (card, k) {
      all.push({ at: from + (to - from) * (k + 1) / (n + 1), kind: 'card', s: card, kicker: title + ' · ' + (k + 1) + '/' + n });
    });
  }

  // keep texts apart; fixed items keep their exact position
  var minUsd = MIN_GAP * USD_PER_X;
  for (var pass = 0; pass < 6; pass++) {
    all.sort(function (a, b) { return a.at - b.at; });
    var moved = false;
    for (var i = 1; i < all.length; i++) {
      if (all[i].at - all[i - 1].at >= minUsd) continue;
      // a movable text goes after its neighbour; fixed ones never move
      if (!all[i].fixed) { all[i].at = all[i - 1].at + minUsd; moved = true; }
      else if (!all[i - 1].fixed) { all[i - 1].at = all[i].at + minUsd; moved = true; }
    }
    if (!moved) break;
  }
  all.sort(function (a, b) { return a.at - b.at; });

  // fill long silences with progress cards
  var region = function (at) { return at < spendFrom ? 'look' : at < spendTo ? 'spend' : 'tail'; };
  var fillers = [], maxUsd = MAX_GAP * USD_PER_X;
  var edges = [{ at: 0 }].concat(all).concat([{ at: D.netWorth }]);
  for (var j = 1; j < edges.length; j++) {
    var gap = edges[j].at - edges[j - 1].at;
    var k = Math.ceil(gap / maxUsd) - 1;
    for (var m = 1; m <= k; m++) fillers.push({ at: edges[j - 1].at + gap * m / (k + 1), kind: 'progress' });
  }
  all = all.concat(fillers).sort(function (a, b) { return a.at - b.at; });

  // numbers for progress cards
  var B = D.base || {};
  function count(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + ' million';
    if (n >= 1000) return Math.round(n).toLocaleString('en-US');
    if (n >= 10) return String(Math.round(n));
    return n.toFixed(1).replace(/\.0$/, '');
  }
  var turn = { look: 0, spend: 0, tail: 0 };
  function progressTokens(at) {
    var spentHere = Math.max(0, Math.min(at, spendTo) - spendFrom);
    var seg = null, c = spendFrom;
    D.spending.forEach(function (s) { if (at >= c && at < c + s.usd) seg = s; c += s.usd; });
    tokens.soFar = short(at);
    tokens.nWage = count(at / B.wage);
    tokens.nLife = count(at / B.lifetime);
    tokens.perPerson = money.format(Math.round(at / B.population / 100) * 100);
    tokens.nOda = count(at / B.oda);
    tokens.nHealth = count(at / B.health);
    tokens.nMalaria = count(at / B.malariaGap);
    tokens.saveYears = count(at / 1000 / 365);
    tokens.gainDays = count(at / B.perDay);
    tokens.spentHere = short(spentHere);
    tokens.leftHere = short(D.netWorth - spentHere);
    tokens.blockTitle = seg ? seg.title : '';
  }

  // draw every item as a zone
  all.forEach(function (it, i) {
    var s = it.s || {};
    var next = all[i + 1] ? all[i + 1].at : D.netWorth;
    var start = Math.round(x(it.at));
    var len = Math.max(40, Math.round(x(next)) - start);
    tokens.here = (it.at / D.netWorth * 100).toFixed(1) + '%';

    var zone = el('div', 'zone zone-' + it.kind);
    place(zone, start, len);
    var inner = el('div', 'zone-inner');

    if (it.kind === 'progress') {
      var r = region(it.at), list = (D.progress || {})[r] || [];
      if (!list.length) return;
      progressTokens(it.at);
      var t = list[turn[r]++ % list.length];
      inner.appendChild(el('div', 'zone-kicker', fill(r === 'look' ? '{soFar} in' : r === 'spend' ? 'Spent so far: {spentHere}' : 'Still his: {leftHere}')));
      inner.appendChild(el('div', 'progress-text', fill(t)));
    } else if (it.kind === 'seg') {
      if (s.kicker) inner.appendChild(el('div', 'seg-kicker', fill(s.kicker)));
      inner.appendChild(el('div', 'seg-title', fill(s.title)));
      inner.appendChild(el('div', 'seg-cost', fill(s.cost || short(s.usd))));
      if (s.html) inner.appendChild(el('div', 'seg-text', fill(s.html)));
    } else if (it.kind === 'card') {
      inner.appendChild(el('div', 'zone-kicker', fill(it.kicker)));
      inner.appendChild(el('div', 'card-title', fill(s.title)));
      inner.appendChild(el('div', 'note-text', fill(s.html)));
    } else if (it.kind === 'square') {
      var sq = el('div', 'shape');
      var sd = side(s.usd);
      sq.style.width = sd + 'px';
      sq.style.height = sd + 'px';
      inner.appendChild(sq);
      inner.appendChild(el('div', 'note-text', fill(s.label)));
      inner.appendChild(el('div', 'zone-value', fill(s.value || short(s.usd))));
    } else {
      if (it.kind === 'milestone') inner.appendChild(el('div', 'zone-kicker', 'You just passed'));
      if (s.title) inner.appendChild(el('div', 'note-title', fill(s.title)));
      if (it.kind === 'milestone') inner.appendChild(el('div', 'zone-value', fill(s.value || short(it.at))));
      if (s.html) inner.appendChild(el('div', 'note-text', fill(s.html)));
    }
    zone.appendChild(inner);
    bar.appendChild(zone);
  });

  // ruler labels every $10 billion
  var ruler = document.getElementById('ruler');
  for (var v = 10e9; v < D.netWorth; v += 10e9) {
    var rl = el('div', 'ruler-label', '$' + (v / 1e9) + 'B');
    if (V) rl.style.top = Math.round(x(v)) + 'px'; else rl.style.left = Math.round(x(v)) + 'px';
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

  function barStart() {
    var r = bar.getBoundingClientRect();
    return V ? r.top + window.scrollY : r.left + window.scrollX;
  }
  var bl = barStart();
  window.addEventListener('resize', function () { bl = barStart(); update(); });
  // switching between phone and desktop layout needs a fresh layout
  var mq = window.matchMedia(window.LAYOUT_QUERY || '(max-width: 760px), (pointer: coarse)');
  if (mq.addEventListener) mq.addEventListener('change', function () { location.reload(); });

  function update() {
    ticking = false;
    var pos = V ? window.scrollY + window.innerHeight * 0.5 - bl : window.scrollX + window.innerWidth * 0.5 - bl;
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
  if (!V) window.addEventListener('wheel', function (e) {
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
