fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    const films = document.querySelector('#films');
    movies.forEach(movie => {
      const article = document.createElement('article');
      const title = document.createElement('h2');
      const details = document.createElement('p');

      title.textContent = movie.title;
      details.textContent = `${movie.director} — ${movie.year} — ${movie.genre}`;

      article.append(title, details);
      films.appendChild(article);
    });
  })
  .catch(error => console.error('Fout:', error));
