const EVENT_DATE = new Date('2026-06-20T15:00:00-04:00');
const RSVP_NUMBER = '15716853592';
const ADDRESS = '616 S Trappe Rd, Collegeville, PA 19426, United States';

const translations = {
  en: {
    miracle: 'A MIRACLE IS ON THE WAY',
    joinUs: 'PLEASE JOIN US FOR A',
    title: 'baby shower',
    honoring: 'HONORING BABY SPIRITO',
    countdownLabel: 'COUNTDOWN',
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MIN',
    seconds: 'SEC',
    date: 'DATE',
    time: 'TIME',
    location: 'LOCATION',
    accept: 'Accept Invitation',
    decline: 'Decline Invitation',
    registry: 'Gift Registry',
    acceptMessage: "Hi! I'd love to attend Baby Spirito's baby shower 💛",
    declineMessage: "Hi! Thanks for the invitation, unfortunately I can't attend.",
  },
  es: {
    miracle: 'UN MILAGRO VIENE EN CAMINO',
    joinUs: 'ACOMPÁÑANOS A CELEBRAR EL',
    title: 'baby shower',
    honoring: 'EN HONOR A BABY SPIRITO',
    countdownLabel: 'CUENTA REGRESIVA',
    days: 'DÍAS',
    hours: 'HORAS',
    minutes: 'MIN',
    seconds: 'SEG',
    date: 'FECHA',
    time: 'HORA',
    location: 'UBICACIÓN',
    accept: 'Aceptar invitación',
    decline: 'Rechazar invitación',
    registry: 'Mesa de regalos',
    acceptMessage: '¡Hola! Me encantaría asistir al baby shower de Baby Spirito 💛',
    declineMessage: '¡Hola! Gracias por la invitación, lamentablemente no podré asistir.',
  },
};

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const googleMapsLink = document.getElementById('google-maps');
const appleMapsLink = document.getElementById('apple-maps');
const acceptLink = document.getElementById('accept-link');
const declineLink = document.getElementById('decline-link');

const btnEn = document.getElementById('btn-en');
const btnEs = document.getElementById('btn-es');

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

function setupMapLinks() {
  const encoded = encodeURIComponent(ADDRESS);
  googleMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  appleMapsLink.href = `https://maps.apple.com/?q=${encoded}`;
}

function setupRSVPLinks(lang) {
  const content = translations[lang];
  acceptLink.href = `https://wa.me/${RSVP_NUMBER}?text=${encodeURIComponent(content.acceptMessage)}`;
  declineLink.href = `https://wa.me/${RSVP_NUMBER}?text=${encodeURIComponent(content.declineMessage)}`;
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const content = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = content[key];
  });

  btnEn.classList.toggle('active', lang === 'en');
  btnEs.classList.toggle('active', lang === 'es');

  setupRSVPLinks(lang);
}

btnEn.addEventListener('click', () => setLanguage('en'));
btnEs.addEventListener('click', () => setLanguage('es'));

setupMapLinks();
setLanguage('en');
updateCountdown();
setInterval(updateCountdown, 1000);
