const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Åpne meny' : 'Lukk meny');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Åpne meny');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Forespørsel om vindusvask – ${data.get('name')}`);
  const body = encodeURIComponent([
    `Navn: ${data.get('name')}`,
    `Telefon: ${data.get('phone')}`,
    `E-post: ${data.get('email') || 'Ikke oppgitt'}`,
    `Adresse/område: ${data.get('address') || 'Ikke oppgitt'}`,
    '',
    `Melding: ${data.get('message') || 'Ikke oppgitt'}`
  ].join('\n'));
  document.querySelector('#formStatus').textContent = 'E-postutkastet åpnes i e-postprogrammet ditt.';
  window.location.href = `mailto:post@hsrens.no?subject=${subject}&body=${body}`;
});
