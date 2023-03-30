"use strict";

window.addEventListener("load", initApp);

async function initApp() {
// Get the return value from the parsed JSON data
const pokemons = await getPokemon(
  "https://cederdorff.github.io/dat-js/05-data/pokemons.json");

// Sorts by dexindex
pokemons.sort(sortByDexIndex);

// Show every pokemon from the array in the table
for (const pokemans of pokemons) {
  addPokemon(pokemans);
}
// This also works, but we are using forof instead
// pokemons.forEach(addPokemon);

}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function sortByDexIndex(pokemonA, pokemonB) {
  return pokemonA.dexindex - pokemonB.dexindex;
}

// Adds html to each pokemon in the object
function addPokemon(pokemon) {
    const myHtml = /*html*/ `
    <tr>
    <td>${pokemon.name}</td>
    <td><img src="${pokemon.image}"></td>
    <td>Ability: ${pokemon.ability}</td>
    <td>${pokemon.dexindex}</td>
    <td>${pokemon.description}</td>`
    

    document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHtml);
    document.querySelector("#pokemons tbody:last-child").addEventListener("click", pokemonClicked);

function pokemonClicked() {

  // Changes "canEvolve" and "gender" to more user friendly output
  changeEvolveUndefined(pokemon);

  // Injects dialogue window when clicking on a pokemon
  const modalHtml = /*html*/ `
  <div class="modal-header">
  <h2>${pokemon.name}</h2>
  </div>
  <div class="modal-body">
  <div class="pokemon-details">
  <div class="pokemon-details-image">
  <img src="${pokemon.image}">
  <img src="${pokemon.footprint}">
  </div>
  <div class="pokemon-details-info">
  <ul>
  <li><strong>Description:</strong> ${pokemon.description}</li>
  <li><strong>Type:</strong> ${pokemon.type}</li>
  <li><strong>Subtype:</strong> ${pokemon.subtype}</li>
  <li><strong>Generation:</strong> ${pokemon.generation}</li>
  <li><strong>Ability:</strong> ${pokemon.ability}</li>
  <li><strong>DexIndex:</strong> ${pokemon.dexindex}</li>
  <li><strong>Weaknesses:</strong> ${pokemon.weaknesses}</li>
  <li><strong>Gender:</strong> ${pokemon.gender}</li>
  <li><strong>Weight:</strong> ${pokemon.weight} grams</li>
  <li><strong>Height:</strong> ${pokemon.height} cm</li>
  <li><strong>Spil Version:</strong> ${pokemon.spilversion}</li>
  <li><strong>Can Evolve:</strong> ${pokemon.canEvolve}</li>
  <li><strong>Stats HP:</strong> ${pokemon.statsHP}</li>
  <li><strong>Stats Attack:</strong> ${pokemon.statsAttack}</li>
  <li><strong>Stats Defence:</strong> ${pokemon.statsDefence}</li>
  <li><strong>Stats Special Attack:</strong> ${pokemon.statsSpecialAttack}</li>
  <li><strong>Stats Special Defence:</strong> ${pokemon.statsSpecialDefence}</li>
  <li><strong>Stats Speed:</strong> ${pokemon.statsSpeed}</li>
  </ul>
  </div>
  </div>
  <div class="modal-footer">
  <form method="dialog">
  <button type="submit" class="modal-luk">Close</button>
  </form>
  </div>
  </div>`; 
  
  const dialog = document.querySelector("#pokemondetails");
  dialog.showModal();
  dialog.scrollTo({top: 0, behavior: `smooth`});
  dialog.innerHTML = modalHtml;
    }
}

function changeEvolveUndefined (pokemon) {
  if (pokemon.canEvolve) {
    pokemon.canEvolve = "Yes!";
  } else {
    pokemon.canEvolve = "No";
  }
  if ((pokemon.gender === "undefined")) {
    pokemon.gender = "Unknown";
  }
}