const input = document.querySelector('#input');
const result = document.querySelector('#result');

document.querySelector('#save').addEventListener('click', () => {
  localStorage.setItem('savedText', input.value);
  result.textContent = 'Tekst opgeslagen.';
});

document.querySelector('#retrieve').addEventListener('click', () => {
  const savedText = localStorage.getItem('savedText');
  result.textContent = savedText === null
    ? 'Er is nog niets opgeslagen.'
    : savedText;
});
