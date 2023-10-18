const ResultCard = ({ pokemon={} }) => {
    return (
        <article 
            style={{ backgroundColor: getColorFromType(pokemon.types[0]) }} 
            className="p-2 flex flex-col items-center flex-grow-[1] gap-2 
                max-w-sm rounded-md text-white capitalize cursor-pointer
                hover:scale-[1.025]">

            <h4> {pokemon.index.toString().padStart(4, "0")} </h4>

            <figure className="rounded-[100%] bg-[#ffffff88]">
                <img src={ pokemon.sprite } alt={`${pokemon.name} sprite`}/>
            </figure>

            <h4> { pokemon.name } </h4>
        </article>
    );
}

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

export default ResultCard;