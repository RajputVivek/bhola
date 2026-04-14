/* ============================================================
   THE FAMILY DENTAL CARE — Main JavaScript
   ============================================================ */

// ─── Navbar Scroll Effect ───────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ─── Mobile Nav Toggle ──────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
const toggleSpans = document.querySelectorAll('.nav-toggle span');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    // Hamburger → X animation
    if (open) {
      toggleSpans[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
      toggleSpans[1].style.cssText = 'opacity:0';
      toggleSpans[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
    } else {
      toggleSpans.forEach(s => s.style.cssText = '');
    }
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleSpans.forEach(s => s.style.cssText = '');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      toggleSpans.forEach(s => s.style.cssText = '');
    }
  });
}

// ─── Active Nav Link ────────────────────────────────────────
(function markActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ─── Scroll Reveal ──────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, (entry.target.dataset.delay || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ─── Time Slot Selection (Booking Page) ─────────────────────
document.querySelectorAll('.time-slot:not(.unavailable)').forEach(slot => {
  slot.addEventListener('click', () => {
    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
    slot.classList.add('selected');
    const hidden = document.getElementById('selected-time');
    if (hidden) hidden.value = slot.textContent.trim();
  });
});

// ─── Booking Form Submission ─────────────────────────────────
const bookingForm = document.getElementById('booking-form');
const confirmBox  = document.getElementById('confirmation-box');

if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = bookingForm.querySelector('[type="submit"]');
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Booking...';
    btn.disabled = true;

    // Collect data
    const data = {
      name:      bookingForm.querySelector('#b-fname').value + ' ' + bookingForm.querySelector('#b-lname').value,
      email:     bookingForm.querySelector('#b-email').value,
      phone:     bookingForm.querySelector('#b-phone').value,
      date:      bookingForm.querySelector('#b-date').value,
      time:      document.getElementById('selected-time')?.value || 'Not selected',
      message:   bookingForm.querySelector('#b-message').value,
    };

    // Save to table API
    try {
      await fetch('tables/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.warn('Table API not available, continuing locally.');
    }

    // Show confirmation
    setTimeout(() => {
      bookingForm.style.display = 'none';
      if (confirmBox) {
        confirmBox.classList.add('show');
        const nameEl = document.getElementById('conf-name');
        const dateEl = document.getElementById('conf-date');
        const timeEl = document.getElementById('conf-time');
        if (nameEl) nameEl.textContent = data.name;
        if (dateEl) dateEl.textContent = formatDate(data.date);
        if (timeEl) timeEl.textContent = data.time;
        confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      btn.innerHTML = origText;
      btn.disabled = false;
    }, 1200);
  });
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// ─── Contact Form Submission ─────────────────────────────────
const contactForm = document.getElementById('contact-form');
const contactMsg  = document.getElementById('contact-success');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    const data = {
      name:    contactForm.querySelector('#c-fname').value + ' ' + contactForm.querySelector('#c-lname').value,
      email:   contactForm.querySelector('#c-email').value,
      phone:   contactForm.querySelector('#c-phone').value,
      message: contactForm.querySelector('#c-message').value,
    };

    try {
      await fetch('tables/contact_messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.warn('Table API not available.');
    }

    setTimeout(() => {
      if (contactMsg) {
        contactMsg.style.display = 'flex';
        contactMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      contactForm.reset();
      btn.innerHTML = origText;
      btn.disabled = false;
    }, 1000);
  });
}

// ─── Smooth Scroll for anchor links ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Min date for booking ────────────────────────────────────
const dateInput = document.getElementById('b-date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}

// ─── Counter Animation ───────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 24);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
