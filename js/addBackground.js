export function addBackground(color){
    const pokemonCard = document.querySelector(".pokemon-item");
    pokemonCard.style.backgroundImage = `radial-gradient(
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
      )`
}