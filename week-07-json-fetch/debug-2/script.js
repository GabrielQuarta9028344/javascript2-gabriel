// Fout gevonden: Er staat een ongeldige komma na het laatste product in products.json.
// Oplossing: Verwijder de komma, zodat het JSON-bestand geldig is.

fetch('./products.json')
  .then(r => r.json())
  .then(products => {
    const list = document.querySelector('#results');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} — €${product.price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
