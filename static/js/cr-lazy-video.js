// Lazy-play motion embeds. Swaps data-cr-lazy-src to src and starts
// playback when each <video> scrolls within ~200px of the viewport.
// Without this, autoplay forces every video on the page to fetch its
// full file on initial load regardless of preload="metadata".
(function () {
  function load(v) {
    if (v.src) return;
    var src = v.dataset.crLazySrc;
    if (!src) return;
    v.src = src;
    v.autoplay = true;
    v.load();
  }

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('video[data-cr-lazy-src]').forEach(load);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (!entry.isIntersecting) continue;
      load(entry.target);
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '200px 0px' });

  document.querySelectorAll('video[data-cr-lazy-src]').forEach(function (v) {
    observer.observe(v);
  });
})();
