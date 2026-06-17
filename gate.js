/* Staging gate: triple-click the lock-screen logo to reveal the page.
   Obscurity only, not a substitute for real access control. */
(function () {
  function unlock() {
    try { sessionStorage.setItem('vd-unlocked', '1'); } catch (e) {}
    document.documentElement.classList.add('vd-unlocked');
  }
  var t = document.getElementById('vd-unlock');
  if (!t) return;
  var count = 0, last = 0;
  t.addEventListener('click', function () {
    var now = Date.now();
    count = (now - last < 700) ? count + 1 : 1;
    last = now;
    if (count >= 3) { count = 0; unlock(); }
  });
})();
