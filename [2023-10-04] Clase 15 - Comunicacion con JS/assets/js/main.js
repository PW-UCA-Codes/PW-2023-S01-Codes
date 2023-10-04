//Declaracion de variables logica
let pokemons = [];

//Declaracion de variables visuales
let pokeForm = null;
let pokeParty = null;

//bind views
const bindElements = () => {
  pokeForm = document.querySelector("#pokemon-form");
  pokeParty = document.querySelector("#pokemon-party-section");
}

const setFormListener = () => {
  pokeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchText = new FormData(pokeForm).get("search");
    if(!searchText) {
      alert("Campo vacio");
      return;
    }

    const _poke = await fetchPokemon(searchText);

    if(!_poke) {
      return;
    }
    
    pokemons.unshift(_poke);
    renderPokemons();

    pokeForm.reset(); 
/* 
    const _pokemon = {};
    let hasErrors = false;

    data.forEach((value,key) => {
      if(!value) {
        hasErrors = true;
      }

      _pokemon[key] = value;
    })

    if(hasErrors) {
      alert("Se encontraron errores");
      return;
    }

    //pokemons = [...pokemons, _pokemon];
    pokemons.unshift(_pokemon);
    renderPokemons();
    pokeForm.reset(); */
  });
}

//Fetch pokeapi
const fetchPokemon = async (search) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, { 
      method: "GET"
    });

    if(response.ok) {
      //TODO
      const _data = await response.json();
      const newPokemon = castResponseToPokemon(_data);
      return newPokemon;
    }

    switch(response.status) {
      case 404: 
        alert("No lo encontré!"); 
        break;
      default:
        alert("No se que pasó :c");
    }

  } catch (error) {
    alert("Falle :c");
  }
}

//Cast response to Pokemon
const castResponseToPokemon = (info) => {
  return {
    index: info.id,
    name: info.name,
    height: info.height,
    weight: info.weight,
    sprite: info.sprites.front_default,
    types: info.types.map(_t => {
      return _t.type.name
    }),
    stats: info.stats.map(_s => {
      return {
        stat: _s.base_stat,
        name: getStatFromText(_s.stat.name)
      }
    })
  };
}

const getStatFromText = (text) => {
  const dict = {
    "hp": "hp",
    "attack": "atk",
    "defense": "def",
    "special-attack": "s-atk",
    "special-defense": "s-def",
    "speed": "spd"
  }

  return dict[text] || "ns";
}

const getColorFromType = (type) => {
  let _colors = {
    "normal": "#212121",
    "fighting": "#c62828",
    "flying": "#0277bd",
    "poison": "#6a1b9a",
    "ground": "#3e2723",
    "rock": "#616161",
    "bug": "#827717",
    "ghost": "#12005e",
    "steel": "#37474f",
    "fire": "#bf360c",
    "water": "#1a237e",
    "grass": "#1b5e20",
    "electric": "#fbc02d",
    "psychic": "#c2185b",
    "ice": "#4fc3f7",
    "dragon": "#0d47a1",
    "dark": "#000000",
    "fairy": "#9e00c5",
  }

  return _colors[type] || "#263859";
}

const createPokemonCard = (poke) => {
  const stats = poke.stats.map(_s => `
    <div class="stat">
      <p> ${_s.name.toUpperCase()}: </p>
      <div class="bar">
        <div style="width: ${(_s.stat/255)*100}%;"></div>
      </div>
    </div>
  `).join("\n");

  const content = `
  <figure>
    <img src=${poke.sprite} alt="Pokemon Sprite">
  </figure>

  <div class="info">
    <h4> ${poke.name} </h4>
    <p> # ${poke.index} </p>
    <p> Altura: ${poke.height} </p>
    <p> Peso: ${poke.weight} </p>
  </div>

  <div class="stats">
    ${stats}
  </div>
  <button class="delete-pokemon"> X </button>
  `;

  const _article = document.createElement("article");
  _article.innerHTML = content;
  _article.dataset.index = poke.index;
  _article.style.backgroundColor = getColorFromType(poke.types[0]);

  _article.querySelector(".delete-pokemon")
    .addEventListener("click", ()=> {
      //Eliminar pokemon
    });
    
  return _article;
}

const renderPokemons = () => {
  pokeParty.innerHTML = "";
  pokemons.forEach(poke => {
    pokeParty.appendChild(createPokemonCard(poke));
  });
  
}

//Main function
const Main = () => {
  bindElements();
  setFormListener();
}

window.onload = Main;