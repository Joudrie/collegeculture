/* The menu row under the header on every page. Static pages get it on load;
   the school page calls siteNav(band) after it builds its header. */
(function () {
  'use strict';
  var LINKS = [['index.html', 'Schools'], ['quiz.html', 'Quiz'], ['compare.html', 'Compare'], ['basics.html', 'Basics']];

  function build() {
    var page = location.pathname.split('/').pop() || 'index.html';
    if (page === 'school.html') page = 'index.html';
    var nav = document.createElement('nav');
    nav.className = 'topnav';
    nav.setAttribute('aria-label', 'Site');
    var wrap = document.createElement('div');
    wrap.className = 'wrap';
    LINKS.forEach(function (l) {
      var a = document.createElement('a');
      a.href = l[0];
      a.textContent = l[1];
      if (l[0] === page) a.setAttribute('aria-current', 'page');
      wrap.appendChild(a);
    });
    nav.appendChild(wrap);
    return nav;
  }

  window.siteNav = function (after) {
    var old = document.querySelector('.topnav');
    if (old) old.remove();
    after.insertAdjacentElement('afterend', build());
  };

  document.addEventListener('DOMContentLoaded', function () {
    var band = document.querySelector('header.band');
    if (band && !document.querySelector('.topnav')) window.siteNav(band);
  });
})();
