import { refs } from "./refs.js";
import { fetchTheCards } from "./fetch.js";
import { addCards } from "./addCard.js";

let previousPokemon = null;
const ERROR1 = `<p class="error-text">Opppps....  We can't find pokemon with this name... :(</p>`;
const ERROR2 = `<p class="error-text">Opppps....  Something went wrong :(</p>`;
const ERROR3 = `<p class="error-text">Opppps....  We have some problems :(</p>`;

export async function onSubmitForm(e) {
  e.preventDefault();
  const pokemonName = e.target.elements.name.value.toLowerCase();
  if (!pokemonName || pokemonName === previousPokemon) {
    e.target.reset();
    return;
  }
  previousPokemon = pokemonName;
  try {
    const saveData = await fetchTheCards(pokemonName)
    if(!saveData.ok){
        throw new Error(saveData.status)
    }
    addCards(await saveData.json())
  } catch(err) {
    switch(err.message){
        case "404":
            refs.list.innerHTML = ERROR1
            break
        case "Failed to fetch":
            refs.list.innerHTML = ERROR2
            break
        default:
          refs.listinnerHTML = ERROR3
    }
  }
  e.target.reset();
}
