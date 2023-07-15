export function createCard(pokemonObj) {
  const abilities = pokemonObj.abilities.map(e => `<li class="pokemon-ability"><p>${e.ability.name}</p></p></li>`)
  return `<li class="pokemon-card">
    <a class="pokemon-link" target="_blank" rel="nofollow noreferrer noopener" href="https://www.pokemon.com/us/pokedex/${pokemonObj.name}">
    <img
      src="${pokemonObj.sprites.front_default}"
      alt="pokemon"
      width="205px"
      height="205px"
    />
    <div class="pokemon-text-content">
      <h3 class="pokemon-name">${pokemonObj.name}</h3>
      <h4 class="abilities-title">Abilities:</h4>
      <ul class="pokemon-abilities">
        ${abilities.join("")}
      </ul>
    </div>
    </a>
  </li>`;
}
