import Controls from "./Controls/Controls";
import PokeList from "./PokeList/PokeList";

const PokeResults = ({ results=[] }) => {
    return (
        <section className="flex flex-col items-center justify-center p-4 gap-4">
            <Controls />
            <PokeList results={results} />
        </section>
    );
}

export default PokeResults;