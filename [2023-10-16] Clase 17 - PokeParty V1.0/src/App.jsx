import { useState } from "react";

import PokeParty from "./components/PokeParty/PokeParty";
import PokeResults from "./components/PokeResults/PokeResults";

const dummyPokemons = [{"index":167,"name":"spinarak","height":5,"weight":85,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png","types":["bug","poison"],"stats":[{"stat":40,"name":"hp"},{"stat":60,"name":"atk"},{"stat":40,"name":"def"},{"stat":40,"name":"s-atk"},{"stat":40,"name":"s-def"},{"stat":30,"name":"spd"}]},{"index":136,"name":"flareon","height":9,"weight":250,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png","types":["fire"],"stats":[{"stat":65,"name":"hp"},{"stat":130,"name":"atk"},{"stat":60,"name":"def"},{"stat":95,"name":"s-atk"},{"stat":110,"name":"s-def"},{"stat":65,"name":"spd"}]},{"index":150,"name":"mewtwo","height":20,"weight":1220,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png","types":["psychic"],"stats":[{"stat":106,"name":"hp"},{"stat":110,"name":"atk"},{"stat":90,"name":"def"},{"stat":154,"name":"s-atk"},{"stat":90,"name":"s-def"},{"stat":130,"name":"spd"}]},{"index":89,"name":"muk","height":12,"weight":300,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png","types":["poison"],"stats":[{"stat":105,"name":"hp"},{"stat":105,"name":"atk"},{"stat":75,"name":"def"},{"stat":65,"name":"s-atk"},{"stat":100,"name":"s-def"},{"stat":50,"name":"spd"}]},{"index":56,"name":"mankey","height":5,"weight":280,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png","types":["fighting"],"stats":[{"stat":40,"name":"hp"},{"stat":80,"name":"atk"},{"stat":35,"name":"def"},{"stat":35,"name":"s-atk"},{"stat":45,"name":"s-def"},{"stat":70,"name":"spd"}]},{"index":1,"name":"bulbasaur","height":7,"weight":69,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","types":["grass","poison"],"stats":[{"stat":45,"name":"hp"},{"stat":49,"name":"atk"},{"stat":49,"name":"def"},{"stat":65,"name":"s-atk"},{"stat":65,"name":"s-def"},{"stat":45,"name":"spd"}]}];

function App() {

  const [ party, setParty ] = useState(dummyPokemons);

  return (
    <>
      {/* Party */}
      <PokeParty party={party}/>

      {/* Results */}
      <PokeResults/>
    </>
  )
}

export default App
