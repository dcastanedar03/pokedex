import { FunctionComponent } from "preact";
import { Pokemon } from "../type.ts";
import { useState } from "preact/hooks";
import {JSX} from "preact";

const BPokemon: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [name, setName] = useState("")
  
  const buscar = async (e: JSX.TargetedEvent<HTMLFormElement, Event>, name: string) => {
    e.preventDefault(); 
      const response = await fetch(`/api/${name}`, {
        method: "GET"
      });
      const pK = await response.json();
      setPokemon(pK)
  }
    
  return (
    <div>
    <h1 class = "principal">Search Pokemon</h1>
    <form method={"GET"} onSubmit={(e) => buscar(e, name)}>
    <div>
      <input class = "centro" type="text" value={name} name = "name" onInput={(e) => setName(e.currentTarget.value)}/>
      <button class = "centro" type={"submit"}>Search</button>
    </div>
    </form>
    <div class="row around">
      {pokemon.map((pokemon) => (
        <div>
          <a class="Container" href={`/pokemon/${pokemon.name}`}>
          <h2 class="overflow">{pokemon.name}</h2>
          <img class="pequeño rounded" src={pokemon.image} alt={pokemon.name}/>
          <audio controls class ="audio">
            <source src={pokemon.sound} type="audio/mpeg"/>
          </audio>
        </a>
          </div>
      ))}
    </div>
    </div>
  );
};

export default BPokemon;