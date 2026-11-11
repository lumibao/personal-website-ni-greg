// Greg — Personal Website (small interactions)

document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

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

  // Scroll-spy: highlight active nav link
  var sections = ['home', 'about', 'interests', 'gallery', 'thoughts', 'contact'];
  var navAnchors = links.querySelectorAll('a');
  function onScroll() {
    var pos = window.scrollY + 120;
    var current = 'home';
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

  // Gallery filter
  var filterBtns = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        var show = f === 'all' || item.getAttribute('data-cat') === f;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });

  // Gallery lightbox (works for placeholders now, and for real <img> later)
  var lightbox = document.getElementById('lightbox');
  var lightboxBody = document.getElementById('lightboxBody');
  var closeBtn = document.getElementById('lightboxClose');
  function openLightbox(item) {
    var caption = item.querySelector('figcaption');
    var img = item.querySelector('img');
    var ph = item.querySelector('.placeholder');
    lightboxBody.innerHTML = '';
    if (img) {
      var clone = img.cloneNode();
      clone.style.width = '100%';
      clone.style.borderRadius = '10px';
      lightboxBody.appendChild(clone);
    } else if (ph) {
      lightboxBody.appendChild(ph.cloneNode(true));
    }
    if (caption) {
      var fig = document.createElement('figcaption');
      fig.textContent = caption.textContent;
      lightboxBody.appendChild(fig);
    }
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  items.forEach(function (item) { item.addEventListener('click', function () { openLightbox(item); }); });
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  // Thoughts: Read more / Show less
  document.querySelectorAll('.post').forEach(function (post) {
    var btn = post.querySelector('.read-more');
    var full = post.querySelector('.post-full');
    if (!btn || !full) return;
    btn.addEventListener('click', function () {
      var isHidden = full.hidden;
      full.hidden = !isHidden;
      btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      btn.textContent = isHidden ? 'Show less ↑' : 'Read more ↓';
    });
  });

  // Contact form (front-end only — no backend yet)
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
    if (!name || !email || !message) {
      note.textContent = 'Please fill in all fields before sending.';
      note.classList.add('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.textContent = 'Please enter a valid email address.';
      note.classList.add('error');
      return;
    }
    note.classList.remove('error');
    note.textContent = 'Thanks, ' + name + '! Your message is ready — note: this demo form does not send yet (no backend).';
    form.reset();
  });
});
