import { colors } from "./backgroundColor.js";

export function createCard(pokemonObj) {
  const color = colors[pokemonObj.types[0].type.name];
  const name = pokemonObj.name.toUpperCase();
  const src = pokemonObj.sprites.other.dream_world.front_default ? pokemonObj.sprites.other.dream_world.front_default : pokemonObj.sprites.front_default;
  const hp = pokemonObj.stats[0].base_stat;
  const xp = pokemonObj.base_experience;
  const atk = pokemonObj.stats[1].base_stat;
  const def = pokemonObj.stats[2].base_stat;
  const speed =pokemonObj.stats[5].base_stat;
  return `<li class="pokemon-item">
  <img
    src="${src}"
    alt="pokemon"
    width="175px"
    height="150px"
  />
  <div class="text-container">
    <h2 class="name">${name}</h2>
    <ul class="stats-list">
      <li class="stats-list-item">
        <p class="stats-name">HP:<span>${hp}</span></p>
      </li>
      <li class="stats-list-item">
        <p class="stats-name">XP:<span>${xp}</span></p>
      </li>
    </ul>
    <ul class="stats-list2">
      <li class="stats-list2-item">
        <p class="stats-name2">ATK:<span>${atk}</span></p>
      </li>
      <li class="stats-list2-item">
        <p class="stats-name2">DEF:<span>${def}</span></p>
      </li>
      <li class="stats-list2-item">
        <p class="stats-name2">SPEED:<span>${speed}</span></p>
      </li>
    </ul>
  </div>
</li>`;
}
