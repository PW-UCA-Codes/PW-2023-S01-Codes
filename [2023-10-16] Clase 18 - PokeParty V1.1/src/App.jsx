import POKELIST from './assets/json/pokelist.json';
import POKEPARTY from './assets/json/pokeparty.json';

import { useState } from "react";

import PokeParty from "./components/PokeParty/PokeParty";
import PokeResults from "./components/PokeResults/PokeResults";

function App() {
  const [ party, setParty ] = useState(POKEPARTY);
  const [ currentResults, setCurrentResults ] = useState(POKELIST);


  return (
    <>
      {/* Party */}
      <PokeParty party={party}/>

      <div className="w-full flex justify-center my-2">
        <div className="w-[90%] h-[2px] bg-slate-500 rounded-lg" />
      </div>

      {/* Results */}
      <PokeResults
        results={ currentResults }/>
    </>
  )
}

export default App
