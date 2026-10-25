const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('consultForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const occasion = String(data.get('occasion') || '').trim();
  const date = String(data.get('date') || '').trim();
  const details = String(data.get('details') || '').trim();
  const error = document.getElementById('formError');
  if (!name || !phone || !occasion) {
    error.textContent = 'Please complete your name, phone number and occasion.';
    return;
  }
  error.textContent = '';
  const message = [
    'Hi Flory Cakes! I would like to enquire about a cake consultation.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Occasion: ${occasion}`,
    `Event date: ${date || 'Not decided yet'}`,
    `Cake ideas/details: ${details || 'I would like to discuss ideas.'}`,
    '',
    'Please let me know how we can discuss the design. Thank you!'
  ].join('\n');
  const url = `https://wa.me/27842812497?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
