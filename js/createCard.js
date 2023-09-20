import { colors } from "./backgroundColor.js";

export function createCard(pokemonObj) {
  const color = colors[pokemonObj.types[0].type.name]
  return `<li class="pokemon-item" style="  background-image: radial-gradient(
    circle at 100% 0%,
    ${color} 20%,
    rgba(255, 255, 255, 0) 20%
  ),
  radial-gradient(
    circle at 0% 0%,
    ${color} 20%,
    rgba(255, 255, 255, 0) 20%
  ),
  radial-gradient(
    circle at 0% 100%,
    ${color} 20%,
    rgba(255, 255, 255, 0) 20%
  ),
  radial-gradient(
    circle at 100% 100%,
    ${color} 20%,
    rgba(255, 255, 255, 0) 20%
  )">
  <img
    src="${pokemonObj.sprites.other.dream_world.front_default}"
    alt=""
    width="175px"
    height="150px"
  />
  <div class="text-container">
    <h2 class="name">${pokemonObj.name.toUpperCase()}</h2>
    <ul class="stats-list">
      <li class="stats-list-item">
        <p class="stats-name">HP:<span>${pokemonObj.stats[0].base_stat}</span></p>
      </li>
      <li class="stats-list-item">
        <p class="stats-name">XP:<span>${pokemonObj.base_experience}</span></p>
      </li>
    </ul>
    <ul class="stats-list2">
      <li class="stats-list2-item">
        <p class="stats-name2">ATK:<span>${pokemonObj.stats[1].base_stat}</span></p>
      </li>
      <li class="stats-list2-item">
        <p class="stats-name2">DEF:<span>${pokemonObj.stats[2].base_stat}</span></p>
      </li>
      <li class="stats-list2-item">
        <p class="stats-name2">SPEED:<span>${pokemonObj.stats[5].base_stat}</span></p>
      </li>
    </ul>
  </div>
</li>`;
}
