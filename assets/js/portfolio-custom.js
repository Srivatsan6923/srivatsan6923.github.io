/* Portfolio custom interactions: theme toggle + scroll reveal */
(function () {
  // ---- Dark / light theme toggle ----
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // ---- Reveal-on-scroll for .reveal and .card ----
  var items = document.querySelectorAll('.reveal, .card');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // stagger cards within the same grid for a cascade effect
        var delay = entry.target.classList.contains('card')
          ? (Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target) % 6) * 70
          : 0;
        setTimeout(function () { entry.target.classList.add('in-view'); }, delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (el) { io.observe(el); });
})();
