import Stat from "./Stat/Stat";

const PokeCard = ({ pokemon = {} }) => {
  const statsComponents = pokemon.stats.map((_s) => {
    return (
      <Stat
        key={`${pokemon.index}-${_s.name}`}
        label={_s.name}
        actual={_s.stat}
      />
    );
  });

  return (
    <article
      style={{ backgroundColor: getColorFromType(pokemon.types[0]) }}
      className="p-2 flex gap-2 rounded-xl">
      <figure className="w-24 flex flex-col justify-center">
        <img
          className="object-contain"
          src={pokemon.sprite}
          alt={`${pokemon.name} Sprite`}
        />
      </figure>

      <div className="flex-1 flex flex-col gap-1 justify-center">
        <h3 className="text-white text-lg font-bold capitalize">
          #{pokemon.index} - {pokemon.name}
        </h3>

        {statsComponents}
      </div>
    </article>
  );
};

const getColorFromType = (type) => {
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

export default PokeCard;
