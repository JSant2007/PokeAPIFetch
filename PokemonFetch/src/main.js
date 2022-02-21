const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemonContenedor");

button.addEventListener("click" || "keyup", e => {
    e.preventDefault(); //!evitar recargar pagina
    traerPokemon(input.value); //!traer valor actual del input
})

function traerPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json()) //!convertir a json
    .then((data) => {
      crearPokemon(data); //! cachar los datos
    });
}


function crearPokemon(pokemon) {
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default; //!source de la imagen

  const h3 = document.createElement("h3");
  h3.textContent = pokemon.name; //!contenido del h3

  const h2 = document.createElement("h2");
  h2.textContent = pokemon.order;

  const div = document.createElement("div");
  div.appendChild(img); //añadir al div
  div.appendChild(h3);
  div.appendChild(h2);

  pokemonContainer.appendChild(div); //!a;adir div al contenedor
}