const button = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Abrir menu'); }
button.addEventListener('click', () => { const open = menu.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); button.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.head-inner')) closeMenu(); });
