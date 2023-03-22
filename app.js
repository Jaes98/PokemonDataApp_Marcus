"use strict";

window.addEventListener("load", initApp);

function initApp() {
const mewtwo = {
  name: "Mewtwo",
  description:
    "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
  ability: "Pressure",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  footprint:
    "https://assets.pokemon.com/assets/cms2/img/trading-card-game/_downloads/bw11/bw11_wallpaper3_th-mewtwo.jpg",
  dexindex: 150,
  type: "Psychic",
  subtype: null,
  weaknesses: "Ghost, Dark, Bug",
  gender: "Unknown",
  weight: 122,
  height: 200,
  generation: 1,
  spilversion: "Pokémon Red and Blue",
  canEvolve: false,
  statsHP: 7,
  statsAttack: 7,
  statsDefence: 6,
  statsSpecialAttack: 10,
  statsSpecialDefence: 6,
  statsSpeed: 8,
};
addPokemon(mewtwo);
}



function addPokemon(pokemon) {
    const myHtml = /*html*/ `
    <li>Name: ${pokemon.name}</li>
    <li>Description: ${pokemon.description}</li>
    <li>Ability: ${pokemon.ability}</li>
    <img src="${pokemon.image}">
    <img src="${pokemon.footprint}">
    <li>DexIndex: ${pokemon.dexindex}</li>
    <li>SubType: ${pokemon.subtype}</li>
    <li>Weaknesses: ${pokemon.weaknesses}</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Weight: ${pokemon.weight}</li>
    <li>Height: ${pokemon.height}</li>
    <li>Generation: ${pokemon.generation}</li>
    <li>Spil Version: ${pokemon.spilversion}</li>
    <li>Can Evolve: ${pokemon.canEvolve}</li>
    <li>Stat HP: ${pokemon.statsHP}</li>
    <li>Stats Attack: ${pokemon.statsAttack}</li>
    <li>Stats Defence: ${pokemon.statsDefence}</li>
    <li>Stats Special Attack: ${pokemon.statsSpecialAttack}</li>
    <li>Stats Special Defence: ${pokemon.statsSpecialDefence}</li>
    <li>Stats Speed: ${pokemon.statsSpeed}</li>`;
    document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHtml);
}


// function showPokemon(pokemon) {
//   const myHTML = /*HTML*/ `
//     <p>Name: <span> ${pokemon.name}</span></p>
//     <p>Description: <span>${pokemon.description}</span></p>
//     <p>Ability: <span>${pokemon.ability}</span></p>
//     <p><span>${pokemon.image}</span></p>
//     <p><span>${pokemon.footprint}</span></p>
//     <p>DexIndex: <span>${pokemon.dexindex}</span></p>
//     <p>SubType: <span>${pokemon.subtype}</span></p>
//     <p>Weaknesses: <span>${pokemon.weaknesses}</span></p>
//     <p>Gender: <span>${pokemon.gender}</span></p>
//     <p>Weight: <span>${pokemon.weight}</span></p>
//     <p>Height: <span>${pokemon.height}</span></p>
//     <p>Generation: <span>${pokemon.generation}</span></p>
//     <p>Spil Version: <span>${pokemon.spilversion}</span></p>
//     <p>Can Evolve: <span>${pokemon.canEvolve}</span></p>
//     <p>Stat HP: <span>${pokemon.statsHP}</span></p>
//     <p>Stats Attack: <span>${pokemon.statsAttack}</span></p>
//     <p>Stats Defence: <span>${pokemon.statsDefence}</span></p>
//     <p>Stats Special Attack: <span>${pokemon.statsSpecialAttack}</span></p>
//     <p>Stats Special Defence: <span>${pokemon.statsSpecialDefence}</span></p>
//     <p>Stats Speed: <span>${pokemon.statsSpeed}</span></p>
//     `;
//   document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
// }

// showPokemon(mewtwo);