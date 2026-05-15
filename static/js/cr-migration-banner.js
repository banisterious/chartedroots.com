(function () {
  var banner = document.querySelector('.cr-migration-banner');
  if (!banner) return;
  var KEY = 'cr-migration-banner-dismissed-v1';
  try {
    if (localStorage.getItem(KEY) === '1') {
      banner.parentNode.removeChild(banner);
      return;
    }
  } catch (e) { /* localStorage unavailable — fall through and show the banner */ }
  var dismiss = banner.querySelector('.cr-migration-banner__dismiss');
  if (!dismiss) return;
  dismiss.addEventListener('click', function () {
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* no-op */ }
    banner.parentNode.removeChild(banner);
  });
})();
