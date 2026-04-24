/* Charted Roots is light-only. Force light mode and clear any stale
   localStorage.appearance from earlier versions of the site that may
   otherwise re-apply the dark class on revisit. */
document.documentElement.classList.remove("dark");
try { localStorage.removeItem("appearance"); } catch (e) {}

window.addEventListener("DOMContentLoaded", () => {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    const bg = getComputedStyle(document.body).backgroundColor;
    themeColorMeta.setAttribute('content', bg);
  }

  const scroller = document.getElementById("top-scroller");
  const footer = document.getElementById("site-footer");
  if (scroller && footer && scroller.getBoundingClientRect().top > footer.getBoundingClientRect().top) {
    scroller.hidden = true;
  }
});
