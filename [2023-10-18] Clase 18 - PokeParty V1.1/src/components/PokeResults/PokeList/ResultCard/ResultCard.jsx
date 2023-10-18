import { getColorFromType } from "../../../../services/pokemon.service";

const ResultCard = ({ pokemon={}, onAdd=()=>{} }) => {
    return (
        <article 
            onClick={() => { onAdd(); }}
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

export default ResultCard;