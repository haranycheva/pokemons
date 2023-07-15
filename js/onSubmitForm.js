import { refs } from "./refs.js"
import { fetchTheCards } from "./fetch.js";
import { addCards } from "./addCard.js";

export async function onSubmitForm(e){
    e.preventDefault();
    const pokemonName = e.target.elements.name.value.toLowerCase();
    if(!pokemonName){
        return
    }
    const saveData = await fetchTheCards(pokemonName)
    addCards(saveData)
} 