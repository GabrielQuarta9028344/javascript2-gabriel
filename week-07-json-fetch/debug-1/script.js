// Fout gevonden: Het JSON-bestand heet news.json, niet new.json.
// Oplossing: Gebruik het juiste bestandspad in fetch().

fetch('./news.json')
  .then(r => r.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
