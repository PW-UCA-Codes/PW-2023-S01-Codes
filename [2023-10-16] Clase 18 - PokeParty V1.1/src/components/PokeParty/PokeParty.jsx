import PokeCard from "./PokeCard/PokeCard";

const PokeParty = ({ party = [] }) => {
    return (
        <section className="flex flex-col items-center justify-center p-4 gap-4">
            <h2 className="font-bold text-xl"> 
                Pokemon Party 
            </h2>
            <div className="w-full md:max-w-5xl grid grid-cols-3 gap-2">
               {
                party.map((_p, i) => {
                    return (
                        <PokeCard key={`${_p.index}-${i}`} pokemon={_p} />
                    );
                })
               }
            </div>
        </section>
    );
}

export default PokeParty;