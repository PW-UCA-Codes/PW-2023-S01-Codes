import axios from "axios";
const PARTY_KEY = "pokeparty";

export const savePartyInLS = (party = []) => localStorage.setItem(PARTY_KEY, JSON.stringify(party));
export const getPartyFromLS = () => JSON.parse(localStorage.getItem(PARTY_KEY)) || [];

export const fetchPokemons = async ({ limit=20, offset=0 }) => {
    try {
       const query = new URLSearchParams({ limit, offset });
       const { data } = await axios.get(`/pokemon?${query.toString()}`);
       
       const _results = data.results || [];

       const pokePromises = _results.map(async (_r) => {
            return await fetchPokemon(_r.name);
       });

       return await Promise.all(pokePromises);
    } catch (error) {
        return [];
    }
}

export const fetchPokemon = async (search = "") => {
  try {
    const { data } = await axios.get(`/pokemon/${search}`);
    return castResponseToPokemon(data);
  } catch (error) {
    return null;
  }
};

export const castResponseToPokemon = (info) => {
  return {
    index: info.id,
    name: info.name,
    height: info.height,
    weight: info.weight,
    sprite: info.sprites.front_default,
    types: info.types.map((_t) => {
      return _t.type.name;
    }),
    stats: info.stats.map((_s) => {
      return {
        stat: _s.base_stat,
        name: getStatFromText(_s.stat.name),
      };
    }),
  };
};

const getStatFromText = (text) => {
  const dict = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "s-atk",
    "special-defense": "s-def",
    speed: "spd",
  };

  return dict[text] || "ns";
};

export const getColorFromType = (type) => {
  let _colors = {
    normal: "#212121",
    fighting: "#c62828",
    flying: "#0277bd",
    poison: "#6a1b9a",
    ground: "#3e2723",
    rock: "#616161",
    bug: "#827717",
    ghost: "#12005e",
    steel: "#37474f",
    fire: "#bf360c",
    water: "#1a237e",
    grass: "#1b5e20",
    electric: "#fbc02d",
    psychic: "#c2185b",
    ice: "#4fc3f7",
    dragon: "#0d47a1",
    dark: "#000000",
    fairy: "#9e00c5",
  };

  return _colors[type] || "#263859";
};
