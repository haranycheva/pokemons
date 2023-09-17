import { refs } from "./refs.js";

const BASE__URL = "https://pokeapi.co/api/v2/pokemon";
const ERROR1 = `<p class="error-text">Opppps....  We can't find pokemon with this name... :(</p>`;
const ERROR2 = `<p class="error-text">Opppps....  Something went wrong :(</p>`;

export async function fetchTheCards(name) {
  let url = `${BASE__URL}/${name}/`;
  refs.list.innerHTML = `<span class="loader"></span>`
  return fetch(url)

}
