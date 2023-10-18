import { getColorFromType } from '../../../services/pokemon.service';

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

      <figure className="w-24 flex flex-col justify-center bg-[#ffffff88] rounded-full">
        <img
          className="object-contain"
          src={pokemon.sprite}
          alt={`${pokemon.name} Sprite`}
        />
      </figure>

      <div className="flex-1 flex flex-col gap-1 justify-center">
        <h3 className="text-white text-lg font-bold capitalize">
          #{pokemon.index.toString().padStart(4, "0")} - {pokemon.name}
        </h3>

        {statsComponents}
      </div>
    </article>
  );
};

export default PokeCard;
