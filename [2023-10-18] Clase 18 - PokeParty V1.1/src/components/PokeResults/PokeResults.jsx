import Controls from "./Controls/Controls";
import PokeList from "./PokeList/PokeList";

const PokeResults = ({ results=[], onNext=()=> {}, onPrev=()=> {}, onAdd=()=> {} }) => {
    return (
        <section className="flex flex-col items-center justify-center p-4 gap-4">
            <Controls onNext={onNext} onPrev={onPrev}/>
            <PokeList 
                onAdd={onAdd}
                results={results} />
        </section>
    );
}

export default PokeResults;