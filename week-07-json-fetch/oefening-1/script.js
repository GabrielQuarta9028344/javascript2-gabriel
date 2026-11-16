fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    const list = document.querySelector('#books-list');
    books.forEach(book => {
      const item = document.createElement('li');
      item.textContent = `${book.title} — ${book.author} (${book.year})`;
      list.appendChild(item);
    });
  })
  .catch(error => console.error('Fout:', error));
