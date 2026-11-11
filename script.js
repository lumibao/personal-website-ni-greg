// Greg — Simple Valorant-style UI (interactions)
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Age from birthday: November 25, 2007
  var birthday = new Date(2007, 10, 25); // month 10 = November
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) age--;
  ['ageHero', 'ageCard', 'ageFact', 'ageResume'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = age;
  });

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });

  // Activity dropdown (click for touch, hover via CSS class on desktop)
  var dropdown = document.querySelector('.dropdown');
  var activityBtn = document.getElementById('activityBtn');
  activityBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = dropdown.classList.toggle('open');
    activityBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', function () { dropdown.classList.remove('open'); });
  dropdown.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { dropdown.classList.remove('open'); });
  });

  // Scroll-spy
  var sections = ['home', 'about', 'interests', 'gallery', 'thoughts', 'contact', 'activity'];
  var navAnchors = links.querySelectorAll(':scope > a');
  function onScroll() {
    var pos = window.scrollY + 130, current = 'home';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= pos) current = id;
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Calendar — starts at November 2026, Nov 25 = birthday
  var calYear = 2026, calMonth = 10; // 10 = November
  var calTitle = document.getElementById('calTitle');
  var calGrid = document.getElementById('calGrid');
  var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  function renderCalendar() {
    calTitle.textContent = monthNames[calMonth] + ' ' + calYear;
    calGrid.innerHTML = '';
    var firstDay = new Date(calYear, calMonth, 1).getDay(); // 0 = Sunday
    var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    var now = new Date();
    for (var i = 0; i < firstDay; i++) {
      var empty = document.createElement('button');
      empty.className = 'empty'; empty.disabled = true;
      calGrid.appendChild(empty);
    }
    for (var d = 1; d <= daysInMonth; d++) {
      var btn = document.createElement('button');
      btn.textContent = d;
      if (calMonth === 10 && d === 25) { btn.className = 'birthday'; btn.title = "Greg's birthday — Nov 25, 2007"; }
      if (now.getFullYear() === calYear && now.getMonth() === calMonth && now.getDate() === d) btn.classList.add('today');
      calGrid.appendChild(btn);
    }
  }
  document.getElementById('calPrev').addEventListener('click', function () {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCalendar();
  });
  document.getElementById('calNext').addEventListener('click', function () {
    calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCalendar();
  });
  renderCalendar();

  // Gallery filter + lightbox
  var filterBtns = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        item.classList.toggle('is-hidden', !(f === 'all' || item.getAttribute('data-cat') === f));
      });
    });
  });
  var lightbox = document.getElementById('lightbox');
  var lightboxBody = document.getElementById('lightboxBody');
  function openLightbox(item) {
    lightboxBody.innerHTML = '';
    var img = item.querySelector('img'), ph = item.querySelector('.placeholder'), cap = item.querySelector('figcaption');
    if (img) { var c = img.cloneNode(); c.style.width = '100%'; lightboxBody.appendChild(c); }
    else if (ph) lightboxBody.appendChild(ph.cloneNode(true));
    if (cap) { var fig = document.createElement('figcaption'); fig.textContent = cap.textContent; lightboxBody.appendChild(fig); }
    lightbox.hidden = false; document.body.style.overflow = 'hidden';
  }
  function closeLightbox() { lightbox.hidden = true; document.body.style.overflow = ''; }
  items.forEach(function (item) { item.addEventListener('click', function () { openLightbox(item); }); });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  // Read more
  document.querySelectorAll('.post').forEach(function (post) {
    var btn = post.querySelector('.read-more'), full = post.querySelector('.post-full');
    if (!btn || !full) return;
    btn.addEventListener('click', function () {
      var show = full.hidden;
      full.hidden = !show;
      btn.setAttribute('aria-expanded', show ? 'true' : 'false');
      btn.textContent = show ? 'Show Less ↑' : 'Read More ↓';
    });
  });

  // Contact form (demo only)
  var form = document.getElementById('contactForm'), note = document.getElementById('formNote');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    if (!name || !email || !msg) { note.textContent = 'Please fill in all fields.'; note.classList.add('error'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { note.textContent = 'Please enter a valid email.'; note.classList.add('error'); return; }
    note.classList.remove('error');
    note.textContent = 'Thanks, ' + name + '! Demo form lang ito — wala pang backend.';
    form.reset();
  });
});
