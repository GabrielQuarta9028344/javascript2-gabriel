let allPokemon = [];

const renderPokemon = (pokemonList) => {
  const list = document.querySelector('#pokemon-list');
  const counter = document.querySelector('#counter');
  const cards = pokemonList.map(pokemon => {
    const article = document.createElement('article');
    const name = document.createElement('h2');
    const image = document.createElement('img');

    name.textContent = pokemon.name;
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    image.alt = pokemon.name;

    article.append(name, image);
    return article;
  });

  list.replaceChildren(...cards);
  counter.textContent = `${pokemonList.length} Pokémon`;
};

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
    }));

    renderPokemon(allPokemon);
  })
  .catch(error => console.error('Fout:', error));

document.querySelector('#search-bar').addEventListener('input', event => {
  const searchTerm = event.target.value.trim().toLowerCase();
  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  renderPokemon(filteredPokemon);
});
