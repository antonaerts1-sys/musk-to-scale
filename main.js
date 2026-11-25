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

  // ---- icons (Lucide, ISC licence; X logo from Simple Icons, CC0) ----
  var ICON_PATHS = {
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    crown: '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',
    landmark: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    bug: '<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
    syringe: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>'
  };
  var X_LOGO = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>';
  function icon(name) {
    if (name === 'x') return el('div', 'zone-icon', X_LOGO);
    if (!ICON_PATHS[name]) return null;
    return el('div', 'zone-icon', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON_PATHS[name] + '</svg>');
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
    if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + ' billion';
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + ' million';
    if (n >= 1000) return Math.round(n).toLocaleString('en-US');
    if (n >= 10) return String(Math.round(n));
    return n.toFixed(1).replace(/\.0$/, '');
  }
  // every progress line is used once; spread them evenly over the fillers of
  // their region, and let a "min" line land right after its amount is passed
  var lineFor = new Map();
  ['look', 'spend', 'tail'].forEach(function (r) {
    var pool = ((D.progress || {})[r] || []).map(function (e) { return typeof e === 'string' ? { t: e } : e; });
    var spots = all.filter(function (it) { return it.kind === 'progress' && region(it.at) === r; });
    var used = [], stride = Math.max(1, Math.floor(spots.length / Math.max(1, pool.length))), since = stride, prevAt = -Infinity;
    spots.forEach(function (it) {
      var pick = -1;
      pool.forEach(function (e, k) { if (pick < 0 && !used[k] && e.min && e.min <= it.at && e.min > prevAt) pick = k; });
      if (pick < 0 && since >= stride) pool.forEach(function (e, k) { if (pick < 0 && !used[k] && (e.min || 0) <= it.at) pick = k; });
      if (pick >= 0) { used[pick] = true; lineFor.set(it, pool[pick]); since = 1; } else since++;
      prevAt = it.at;
    });
  });
  function progressTokens(at) {
    var spentHere = Math.max(0, Math.min(at, spendTo) - spendFrom);
    var seg = null, c = spendFrom;
    D.spending.forEach(function (s) { if (at >= c && at < c + s.usd) seg = s; c += s.usd; });
    tokens.soFar = short(at);
    var inc = D.income || {}, ppl = D.people || {};
    Object.keys(inc).forEach(function (k) { tokens['n' + k.charAt(0).toUpperCase() + k.slice(1)] = count(at / inc[k]); });
    tokens.perPoor = money.format(Math.round(at / ppl.poor));
    tokens.perLic = money.format(Math.round(at / ppl.lic));
    tokens.nMalaria = count(at / B.malariaGap);
    tokens.pctSpent = Math.round(spentHere / D.netWorth * 100) + '%';
    tokens.saveYears = count(at / 1000 / 365);
    tokens.gainDays = count(at / B.perDay);
    tokens.spentHere = short(spentHere);
    tokens.leftHere = short(D.netWorth - spentHere);
    tokens.blockTitle = seg ? seg.title : '';
  }

  // draw every item as a zone
  var vizList = [];        // scroll-driven pictures (the people grid)
  var stopsUsd = [];       // where autoscroll pauses so you can read
  function gauge(doneUpTo, now) {
    // his whole fortune as one strip; the spending blocks fill it from the left
    var g = el('div', 'gauge anim');
    var track = el('div', 'gauge-track');
    var c = 0;
    D.spending.forEach(function (sp, k) {
      if (k > doneUpTo) return;
      var part = el('div', 'gauge-part' + (k === now ? ' now' : ''));
      part.style.left = (c / D.netWorth * 100).toFixed(3) + '%';
      part.style.setProperty('--w', (sp.usd / D.netWorth * 100).toFixed(3) + '%');
      track.appendChild(part);
      c += sp.usd;
    });
    g.appendChild(track);
    g.appendChild(el('div', 'gauge-label', 'Spent ' + short(c) + ' <span>Still his: ' + short(D.netWorth - c) + '</span>'));
    return g;
  }
  function race(r, amount, mine) {
    var max = Math.max(r.usd, amount);
    var box = el('div', 'race anim');
    [[r.name, r.usd, 'them'], [mine, amount, 'him']].forEach(function (row) {
      var line = el('div', 'race-row ' + row[2]);
      line.appendChild(el('div', 'race-label', row[0] + '<span>' + short(row[1]) + '</span>'));
      var tr = el('div', 'race-track');
      var f = el('div', 'race-fill');
      f.style.setProperty('--w', (row[1] / max * 100).toFixed(2) + '%');
      tr.appendChild(f);
      line.appendChild(tr);
      box.appendChild(line);
    });
    box.appendChild(el('div', 'race-passed', 'Passed'));
    return box;
  }

  all.forEach(function (it, i) {
    var s = it.s || {};
    var next = all[i + 1] ? all[i + 1].at : D.netWorth;
    var start = Math.round(x(it.at));
    var len = Math.max(40, Math.round(x(next)) - start);
    tokens.here = (it.at / D.netWorth * 100).toFixed(1) + '%';
    progressTokens(it.at);
    if (it.fixed) stopsUsd.push(it.at);

    var zone = el('div', 'zone zone-' + it.kind);
    place(zone, start, len);
    var inner = el('div', 'zone-inner');
    var ic = s.icon ? icon(s.icon) : null;

    if (it.kind === 'progress') {
      var r = region(it.at), line = lineFor.get(it);
      inner.appendChild(el('div', 'zone-kicker', fill(r === 'spend' ? 'Spent so far: {spentHere}' : '{soFar} in')));
      if (line) {
        inner.appendChild(el('div', 'progress-text', fill(line.t)));
        if (line.race) {
          var spentNow = Math.max(0, Math.min(it.at, spendTo) - spendFrom);
          inner.appendChild(line.race.basis === 'spent' ? race(line.race, spentNow, 'Spent from his bar so far') : race(line.race, it.at, 'His bar, so far'));
        }
      } else zone.classList.add('zone-quiet');
    } else if (it.kind === 'seg') {
      var k = D.spending.indexOf(s);
      if (ic) inner.appendChild(ic);
      if (s.kicker) inner.appendChild(el('div', 'seg-kicker', fill(s.kicker)));
      inner.appendChild(el('div', 'seg-title', fill(s.title)));
      inner.appendChild(el('div', 'seg-cost', fill(s.cost || short(s.usd))));
      if (s.html) inner.appendChild(el('div', 'seg-text', fill(s.html)));
      inner.appendChild(gauge(k, k));
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
      if (ic) inner.appendChild(ic);
      if (it.kind === 'milestone') inner.appendChild(el('div', 'zone-kicker', 'You just passed'));
      if (s.title) inner.appendChild(el('div', 'note-title', fill(s.title)));
      if (it.kind === 'milestone') inner.appendChild(el('div', 'zone-value', fill(s.value || short(it.at))));
      (s.posts || []).forEach(function (pst) {
        var post = el('figure', 'post nc');
        post.appendChild(el('figcaption', 'post-head', '<span><strong>' + pst.who + '</strong><em>' + pst.meta + '</em></span>' + X_LOGO));
        post.appendChild(el('blockquote', 'post-text', pst.text));
        inner.appendChild(post);
      });
      if (s.viz === 'people') {
        var grid = el('div', 'people');
        grid.setAttribute('role', 'img');
        grid.setAttribute('aria-label', '817 dots, one for every million people living on less than 3 dollars a day');
        var dots = [];
        for (var d = 0; d < 817; d++) { var dot = el('i'); grid.appendChild(dot); dots.push(dot); }
        inner.appendChild(grid);
        vizList.push({ start: start, len: len, dots: dots, shown: -1 });
      }
      if (s.html) inner.appendChild(el('div', 'note-text', fill(s.html)));
      if (s.viz === 'drain') inner.appendChild(gauge(D.spending.length - 1, -1));
    }
    zone.appendChild(inner);
    bar.appendChild(zone);
  });

  // bars and gauges grow when they come into view
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    document.querySelectorAll('.anim').forEach(function (n) { io.observe(n); });
  } else {
    document.querySelectorAll('.anim').forEach(function (n) { n.classList.add('in'); });
  }

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

  // ---- currency: every $ amount on the page can be shown in euro ----
  // Converted at the ECB reference rate. Quotes, sources and amounts in
  // "international dollars" (adjusted for local prices) are left alone.
  var RATE = 1.0963;
  var cur = 'usd';
  var moneyRe = /\$(\d[\d,]*(?:\.\d+)?)(\s?(?:trillion|billion|million)\b|B\b|bn\b)?/g;
  function eurNum(num, suf) {
    var v = parseFloat(num.replace(/,/g, '')) / RATE;
    var dec = (num.split('.')[1] || '').length;
    if (suf) return v.toFixed(dec >= 2 ? 2 : 1).replace(/\.0+$/, '');
    if (dec) return v.toFixed(dec);
    if (v >= 10000) { var p = Math.pow(10, Math.floor(Math.log10(v)) - 2); v = Math.round(v / p) * p; }
    return Math.round(v).toLocaleString('en-US');
  }
  function toEur(t) { return t.replace(moneyRe, function (m, num, suf) { return '€' + eurNum(num, suf) + (suf || ''); }); }
  var moneyNodes = [];
  (function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeValue.indexOf('$') < 0) return NodeFilter.FILTER_REJECT;
        var pnt = n.parentNode;
        if (!pnt || pnt.closest('.nc, #sources, .method, script, style, .big-counter, .hud-scale')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (w.nextNode()) moneyNodes.push({ n: w.currentNode, usd: w.currentNode.nodeValue });
  })();
  var curButtons = document.querySelectorAll('.cur button');
  var hudScale = document.querySelector('.hud-scale');
  function setCurrency(c) {
    cur = c;
    moneyNodes.forEach(function (m) { m.n.nodeValue = c === 'eur' ? toEur(m.usd) : m.usd; });
    curButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.cur === c)); });
    hudScale.textContent = c === 'eur' ? '1 px = €912' : '1 px = $1,000';
    try { localStorage.setItem('cur', c); } catch (e) {}
    update();
  }
  curButtons.forEach(function (b) { b.addEventListener('click', function () { setCurrency(b.dataset.cur); }); });
  function full(usd) {
    var v = cur === 'eur' ? usd / RATE : usd;
    return (cur === 'eur' ? '€' : '$') + (Math.round(v / 1e6) * 1e6).toLocaleString('en-US');
  }

  // ---- scroll: counter, progress, chapters ----
  var bigBox = document.querySelector('.big-counter');
  var bigValue = document.querySelector('.big-value');
  var bigOf = document.querySelector('.big-of');
  var prog = document.querySelector('.hud-progress');
  var progFill = document.querySelector('.hud-progress-fill');
  var ticking = false;

  function barStart() {
    var r = bar.getBoundingClientRect();
    return V ? r.top + window.scrollY : r.left + window.scrollX;
  }
  var bl = barStart();
  function screenLen() { return V ? window.innerHeight : window.innerWidth; }
  function scrollPos() { return V ? window.scrollY : window.scrollX; }
  function scrollToPos(p) { if (V) window.scrollTo(0, p); else window.scrollTo(p, 0); }
  window.addEventListener('resize', function () { bl = barStart(); update(); });
  // switching between phone and desktop layout needs a fresh layout
  var mq = window.matchMedia(window.LAYOUT_QUERY || '(max-width: 760px), (pointer: coarse)');
  if (mq.addEventListener) mq.addEventListener('change', function () { location.reload(); });

  // chapters: a rail on desktop, a sheet on phones
  var nav = D.nav || [];
  var rail = document.querySelector('.rail');
  var sheet = document.getElementById('sheet');
  var sheetList = sheet.querySelector('.sheet-list');
  var jumpBtn = document.querySelector('.jump-btn');
  var navEls = [];
  function jumpTo(item) {
    stopAuto();
    if (item.section) {
      var sec = document.getElementById(item.section);
      scrollToPos(V ? sec.offsetTop - 40 : sec.offsetLeft);
    } else {
      scrollToPos(Math.max(0, bl + x(item.at) - (item.at ? screenLen() * 0.2 : screenLen() * 0.4)));
    }
    closeSheet();
  }
  nav.forEach(function (item, k) {
    var nextAt = nav[k + 1] && !nav[k + 1].section ? nav[k + 1].at : D.netWorth;
    var b = el('button', 'rail-item', '<i></i><span>' + item.name + '</span>');
    b.type = 'button';
    b.style.flex = item.section ? '0 0 150px' : Math.max(30e9, nextAt - item.at) / 1e9 + ' 1 0';
    b.addEventListener('click', function () { jumpTo(item); });
    rail.appendChild(b);
    var sb = el('button', 'sheet-item', '<i></i><span>' + item.name + '</span>');
    sb.type = 'button';
    sb.addEventListener('click', function () { jumpTo(item); });
    sheetList.appendChild(sb);
    navEls.push([b, sb]);
  });
  function openSheet() { sheet.hidden = false; jumpBtn.setAttribute('aria-expanded', 'true'); }
  function closeSheet() { sheet.hidden = true; jumpBtn.setAttribute('aria-expanded', 'false'); }
  jumpBtn.addEventListener('click', function () { if (sheet.hidden) openSheet(); else closeSheet(); });
  sheet.querySelector('.sheet-close').addEventListener('click', closeSheet);
  document.querySelectorAll('[data-jump]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); jumpTo({ at: Number(a.dataset.jump) }); });
  });

  function update() {
    ticking = false;
    var pos = scrollPos() + screenLen() * 0.5 - bl;
    var usd = Math.max(0, Math.min(D.netWorth, pos * USD_PER_X));
    var inBar = pos > 0 && pos * USD_PER_X < D.netWorth;
    bigBox.classList.toggle('on', inBar || V);
    bigValue.textContent = full(usd);
    bigOf.textContent = 'of ' + full(D.netWorth) + ' · ' + (usd / D.netWorth * 100).toFixed(1) + '%';
    prog.classList.toggle('on', pos > 0);
    progFill.style.width = (usd / D.netWorth * 100).toFixed(3) + '%';
    // people grid fills as you scroll through its stretch
    vizList.forEach(function (v) {
      var f = Math.max(0, Math.min(1, (pos - v.start) / (Math.min(v.len, screenLen() * 2.5))));
      var n = Math.round(f * v.dots.length);
      if (n === v.shown) return;
      v.dots.forEach(function (dt, k) { dt.className = k < n ? 'on' : ''; });
      v.shown = n;
    });
    // current chapter
    var curK = -1, actSec = document.getElementById('act');
    nav.forEach(function (item, k) {
      if (item.section) { if ((V ? actSec.offsetTop : actSec.offsetLeft) <= scrollPos() + screenLen() * 0.5) curK = k; }
      else if (pos > 0 && usd >= item.at && (curK < 0 || !nav[curK].section)) curK = k;
    });
    navEls.forEach(function (pair, k) { pair.forEach(function (n) { n.classList.toggle('on', k === curK); }); });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  // ---- autoscroll: let the page scroll for you, faster if you like ----
  var autoBtn = document.querySelector('.auto-btn');
  var speedBtn = document.querySelector('.speed-btn');
  var SPEEDS = [1, 10, 100], speedK = 1, BASE = 220; // px per second at 1x
  var autoOn = false, lastT = 0, fpos = 0, pauseUntil = 0;
  stopsUsd.sort(function (a, b) { return a - b; });
  function setSpeedLabel() { speedBtn.textContent = SPEEDS[speedK] + '×'; }
  function stopAuto() {
    if (!autoOn) return;
    autoOn = false;
    autoBtn.setAttribute('aria-pressed', 'false');
    autoBtn.innerHTML = '&#9654; Scroll for me';
  }
  function step(t) {
    if (!autoOn) return;
    var dt = lastT ? Math.min(0.1, (t - lastT) / 1000) : 0;
    lastT = t;
    if (t < pauseUntil) { requestAnimationFrame(step); return; }
    var before = fpos;
    fpos += SPEEDS[speedK] * BASE * dt;
    // at speed, stop briefly at every milestone so its text can be read
    if (SPEEDS[speedK] > 1) {
      var a0 = (before + screenLen() * 0.3 - bl) * USD_PER_X, a1 = (fpos + screenLen() * 0.3 - bl) * USD_PER_X;
      for (var q = 0; q < stopsUsd.length; q++) {
        if (stopsUsd[q] > a0 && stopsUsd[q] <= a1) {
          fpos = bl + x(stopsUsd[q]) - screenLen() * 0.3;
          pauseUntil = t + (SPEEDS[speedK] >= 100 ? 1400 : 2200);
          break;
        }
      }
    }
    var maxPos = V ? document.documentElement.scrollHeight - window.innerHeight : document.documentElement.scrollWidth - window.innerWidth;
    if (fpos >= maxPos) { fpos = maxPos; scrollToPos(fpos); stopAuto(); return; }
    scrollToPos(fpos);
    requestAnimationFrame(step);
  }
  autoBtn.addEventListener('click', function () {
    if (autoOn) { stopAuto(); return; }
    autoOn = true; lastT = 0; fpos = scrollPos(); pauseUntil = 0;
    autoBtn.setAttribute('aria-pressed', 'true');
    autoBtn.innerHTML = '&#10074;&#10074; Pause';
    requestAnimationFrame(step);
  });
  speedBtn.addEventListener('click', function () { speedK = (speedK + 1) % SPEEDS.length; setSpeedLabel(); });
  setSpeedLabel();
  // any move of your own takes back control
  ['wheel', 'touchstart', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, function (e) { if (!e.target.closest || !e.target.closest('.dock')) stopAuto(); }, { passive: true });
  });

  // a vertical mouse wheel moves the page sideways, unless a section scrolls itself
  if (!V) window.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    var t = e.target.closest && e.target.closest('.outro, .peers, .act, .colophon, .sheet');
    if (t && t.scrollHeight > t.clientHeight) {
      var atTop = t.scrollTop <= 0, atBottom = t.scrollTop + t.clientHeight >= t.scrollHeight - 1;
      if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return;
    }
    e.preventDefault();
    var dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
    window.scrollTo(window.scrollX + dy, 0);
  }, { passive: false });

  // start in euro for readers in the euro area, unless they chose before
  var saved = null;
  try { saved = localStorage.getItem('cur'); } catch (e) {}
  var euroLang = (navigator.languages || [navigator.language || '']).some(function (l) {
    return /-(BE|NL|DE|FR|LU|AT|IE|ES|PT|IT|FI|GR|SK|SI|EE|LV|LT|MT|CY|HR)$/i.test(l);
  });
  if (saved === 'eur' || (!saved && euroLang)) setCurrency('eur');
  update();
})();
