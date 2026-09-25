// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message



const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const message = document.querySelector('#message');
const list = document.querySelector('#list');

btn1.addEventListener('click', () => {
  message.textContent = 'Hallo! Dit is tekst uit knop 1.';
});

btn2.addEventListener('click', () => {
  const item = document.createElement('li');
  item.textContent = 'Nieuw item uit knop 2';
  list.appendChild(item);
});

btn3.addEventListener('click', () => {
  message.classList.toggle('active');
});
