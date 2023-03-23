"use strict";

window.addEventListener("load", initApp);

async function initApp() {
const mewtwo = await getPokemon("https://raw.githubusercontent.com/Jaes98/PokemonDataApp_Marcus/main/mewtwo.json");
addPokemon(mewtwo);
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function addPokemon(pokemon) {
    const myHtml = /*html*/ `
    <tr>
    <td>${pokemon.name}</td>
    <td>${pokemon.description}</td>
    <td>Ability: ${pokemon.ability}</td>
    <td><img src="${pokemon.image}"></td>
    <td><img src="${pokemon.footprint}"></td>
    <td>${pokemon.dexindex}</td>
    <td>${pokemon.type}</td>
    <td>${pokemon.subtype}</td>
    <td>${pokemon.weaknesses}</td>
    <td>${pokemon.gender}</td>
    <td>${pokemon.weight} kg</td>
    <td>${pokemon.height} cm</td>
    <td>${pokemon.generation}</td>
    <td>${pokemon.spilversion}</td>
    <td>${pokemon.canEvolve}</td>
    <td>HP: ${pokemon.statsHP}</td>
    <td>Attack: ${pokemon.statsAttack}</td>
    <td>Defence: ${pokemon.statsDefence}</td>
    <td>Special Attack: ${pokemon.statsSpecialAttack}</td>
    <td>Special Defence: ${pokemon.statsSpecialDefence}</td>
    <td>Speed: ${pokemon.statsSpeed}</td></tr>`
    
    document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHtml);
    document.querySelector("#pokemons tbody:last-child").addEventListener("click", pokemonClicked);

    function pokemonClicked() {
    document.querySelector("#pokemondetails").showModal();
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
          <li><strong>Weight:</strong> ${pokemon.weight} kg</li>
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
  </div>
  <div class="modal-footer">
    <form method="dialog">
      <button type="submit" class="modal-close">Close</button>
    </form>
  </div>`; 
      
    document
      .querySelector("#pokemondetails")
      .insertAdjacentHTML("beforeend", modalHtml);
    }
}



  // const modalHtml = /*html*/ `
  //   <li>Name: ${pokemon.name}</li>
  //   <li>Description: ${pokemon.description}</li>
  //   <li>Ability: ${pokemon.ability}</li>
  //   <img src="${pokemon.image}">
  //   <img src="${pokemon.footprint}">
  //   <li>DexIndex: ${pokemon.dexindex}</li>
  //   <li>SubType: ${pokemon.subtype}</li>
  //   <li>Weaknesses: ${pokemon.weaknesses}</li>
  //   <li>Gender: ${pokemon.gender}</li>
  //   <li>Weight: ${pokemon.weight}</li>
  //   <li>Height: ${pokemon.height}</li>
  //   <li>Generation: ${pokemon.generation}</li>
  //   <li>Spil Version: ${pokemon.spilversion}</li>
  //   <li>Can Evolve: ${pokemon.canEvolve}</li>
  //   <li>Stat HP: ${pokemon.statsHP}</li>
  //   <li>Stats Attack: ${pokemon.statsAttack}</li>
  //   <li>Stats Defence: ${pokemon.statsDefence}</li>
  //   <li>Stats Special Attack: ${pokemon.statsSpecialAttack}</li>
  //   <li>Stats Special Defence: ${pokemon.statsSpecialDefence}</li>
  //   <li>Stats Speed: ${pokemon.statsSpeed}</li>
  //   <form method="dialog">
	// 	<button>Close</button>
  //   </form>`;