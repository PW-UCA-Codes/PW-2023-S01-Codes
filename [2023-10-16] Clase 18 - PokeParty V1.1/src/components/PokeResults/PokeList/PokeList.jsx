import ResultCard from "./ResultCard/ResultCard";

const PokeList = ({ results=[] }) => {
    return (
        <section className="flex gap-2 flex-wrap">
            {
                results.map(_p => (
                    <ResultCard key={_p.index} pokemon={_p}/>
                ))
            }
        </section>
    );
}

export default PokeList;