import { refs } from "./refs.js";

const BASE__URL = "https://pokeapi.co/api/v2/pokemon";
const ERROR = `<p class="error-text">Opppps....  We can't find pokemon with this name... :(</p>`;

export async function fetchTheCards(name) {
  let url = `${BASE__URL}/${name}/`;
  refs.list.innerHTML = `<span class="loader"></span>`
  return fetch(url)
    .then((res) => res.json())
    .catch((res) => (refs.list.innerHTML = ERROR));
}
