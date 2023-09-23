import { createCard } from "./createCard.js";
import { refs } from "./refs.js";
import { colors } from "./backgroundColor.js";
import { addBackground } from "./addBackground.js";

export function addCards(pokemon){
   const card = createCard(pokemon);
   const color = colors[pokemon.types[0].type.name];
   if(refs.list.innerHTML){
    refs.list.innerHTML = "";
   }
   refs.list.insertAdjacentHTML("beforeend", card)
   addBackground(color)
}