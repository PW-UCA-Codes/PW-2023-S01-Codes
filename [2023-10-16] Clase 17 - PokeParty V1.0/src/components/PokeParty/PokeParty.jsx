import PokeCard from "./PokeCard/PokeCard";

const PokeParty = ({ party = [] }) => {
    return (
        <section className="flex items-center justify-center p-4">
            <div className="w-full grid grid-cols-3 gap-2">
               {
                party.map(_p => {
                    return (
                        <PokeCard key={_p.index} pokemon={_p} />
                    );
                })
               }
            </div>
        </section>
    );
}

export default PokeParty;