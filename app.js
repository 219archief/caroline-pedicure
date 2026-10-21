const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Menu openen'); nav.classList.remove('is-open'); }
menuButton.addEventListener('click', () => {
 const open = menuButton.getAttribute('aria-expanded') !== 'true';
 menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen'); nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {if (e.key === 'Escape') closeMenu();});
document.addEventListener('click', e => {if (!e.target.closest('.header')) closeMenu();});
const dialog = document.querySelector('#privacy-dialog');
document.querySelector('[data-open-privacy]').addEventListener('click', () => dialog.showModal());
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', e => { const box = dialog.getBoundingClientRect(); if(e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
