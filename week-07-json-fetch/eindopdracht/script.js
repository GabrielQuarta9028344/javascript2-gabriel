let allArticles = [];

const showArticles = (articles) => {
  const articleElements = articles.map(({ title, category, summary }) => {
    const articleElement = document.createElement('article');
    const categoryElement = document.createElement('span');
    const titleElement = document.createElement('h2');
    const summaryElement = document.createElement('p');

    categoryElement.textContent = category;
    titleElement.textContent = title;
    summaryElement.textContent = summary;

    articleElement.append(categoryElement, titleElement, summaryElement);
    return articleElement;
  });

  document.querySelector('#articles').replaceChildren(...articleElements);
};

fetch('./news.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Nieuws kon niet worden geladen (${response.status})`);
    }

    return response.json();
  })
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Stad'));
});

document.querySelector('#filter-technologie').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Technologie'));
});

document.querySelector('#filter-media').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Media'));
});
