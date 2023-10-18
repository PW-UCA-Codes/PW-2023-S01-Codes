import ResultCard from "./ResultCard/ResultCard";

const PokeList = ({ results=[], onAdd = ()=>{} }) => {
    return (
        <section className="flex gap-2 flex-wrap">
            {
                results.map(_p => (
                    <ResultCard 
                        key={_p.index}
                        onAdd={()=> { onAdd(_p); }} 
                        pokemon={_p}/>
                ))
            }
        </section>
    );
}

export default PokeList;