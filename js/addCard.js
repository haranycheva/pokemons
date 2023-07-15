import { createCard } from "./createCard.js";
import { refs } from "./refs.js";

export function addCards(pokemon){
   const card = createCard(pokemon);
   if(refs.list.innerHTML){
    refs.list.innerHTML = "";
   }
   refs.list.insertAdjacentHTML("beforeend", card)
}