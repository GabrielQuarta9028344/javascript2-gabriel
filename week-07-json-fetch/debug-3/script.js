// Fouten gevonden: Het JSON-pad en het element-ID zijn verkeerd, en de lijst voegt zichzelf toe in plaats van het <li>-element.
// Oplossing: Gebruik users.json en #results, en voeg elke li toe aan de lijst.

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
