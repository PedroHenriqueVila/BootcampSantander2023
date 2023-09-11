
function convertPokemonLi(pokemon) {
    return `
    
            <li class="pokemon">

                 <span class="number">#${pokemon.number}</span>
                 <span class="name">${pokemon.name}</span>

                        <div class="detail">

                            <ol class="types">
                                ${pokemon.type.map((type) => `<li class "type">${type}</li>`)}
                            </ol>

                            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">

                        </div>
                        
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonLi).join('')
    pokemonList.innerHTML = newHtml 
})




