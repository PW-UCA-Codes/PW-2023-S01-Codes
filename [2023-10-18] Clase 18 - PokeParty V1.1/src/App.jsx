import POKEPARTY from './assets/json/pokeparty.json';

import { fetchPokemons, savePartyInLS, getPartyFromLS } from './services/pokemon.service'; 

import { useState, useEffect } from "react";

import PokeParty from "./components/PokeParty/PokeParty";
import PokeResults from "./components/PokeResults/PokeResults";

const LIMIT = 151;

function App() {
  const [ party, setParty ] = useState(getPartyFromLS());
  const [ currentResults, setCurrentResults ] = useState([]);
  const [ offset, setOffset ] = useState(0);

  useEffect(()=> {
    const _fetch = async () => {
      const _results = await fetchPokemons({ limit: LIMIT, offset: offset });
      setCurrentResults(_results);
    };

    _fetch();
  }, [offset]);

  /* useEffect(()=> {
    savePartyInLS(party)
  }, [party]); */

  const onChangePageHandler = (_size=0) => {
    let _offset = offset + _size;
    
    if(_offset < 0) {
      _offset = 0;
    }

    setOffset(_offset);
  }

  const onAddHandler = (_p ={}) => {
    let _party = [...party, _p];

    if(_party.length > 6) {
      _party = _party.slice(1);
    }

    savePartyInLS(party);
    setParty(_party);
  }

  return (
    <>
      {/* Party */}
      <PokeParty party={party}/>

      <div className="w-full flex justify-center my-2">
        <div className="w-[90%] h-[2px] bg-slate-500 rounded-lg" />
      </div>

      {/* Results */}
      <PokeResults
        onNext={()=> { onChangePageHandler(LIMIT) }}
        onPrev={()=> { onChangePageHandler(-LIMIT) }}
        onAdd={(_p) => { onAddHandler(_p) }}
        results={ currentResults }/>
    </>
  )
}

export default App
