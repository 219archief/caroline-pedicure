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
document.querySelectorAll('[data-treatment]').forEach(link => link.addEventListener('click', () => {document.querySelector('#treatment').value = link.dataset.treatment;}));
const form = document.querySelector('#contact-form');
form.addEventListener('submit', e => {
 e.preventDefault();
 if (!form.reportValidity()) return;
 const data = new FormData(form);
 const subject = data.get('treatment') ? 'Afspraak: ' + data.get('treatment') : 'Vraag aan Caroline Pedicure';
 const body = 'Naam: ' + String(data.get('name')).trim() + (data.get('phone') ? '\nTelefoonnummer: ' + String(data.get('phone')).trim() : '') + '\nOnderwerp: ' + (data.get('treatment') || 'Een vraag') + '\n\n' + String(data.get('message')).trim();
 const href = 'mailto:carolinepeters69@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
 const status = document.querySelector('#form-status');
 status.textContent = 'Je bericht staat klaar voor je e-mailprogramma. Verstuur het daar zelf. Opent er niets? Gebruik dan het e-mailadres hieronder of neem contact op via WhatsApp.';
 window.location.href = href;
});
const dialog = document.querySelector('#privacy-dialog');
document.querySelector('[data-open-privacy]').addEventListener('click', () => dialog.showModal());
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', e => { const box = dialog.getBoundingClientRect(); if(e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
