import { FunctionComponent } from "preact";
import { Pokemon } from "../type.ts";
import { useEffect, useState } from "preact/hooks";

type pokemon = {
    name: string;
}

const UnPokemon: FunctionComponent<pokemon> = (props) => {
  const {name} = props;

  const [show, setShow] = useState(false)
  const [creator, setCreador] = useState("")
  const [pokemonL, setPokemon] = useState<Pokemon[]>([])
  
  useEffect(() => {
    const pokem = async () => {
      const response = await fetch(`/api/${name}`, {
          method: "GET"
        });
        const pK = await response.json();
        setPokemon(pK)
    }
    pokem()
}, [])
  
  const deletePokemon = async () => {
    try {
      if(creator === ""){
        alert("falta nombre del creador")
      }
      const response = await fetch(`/api/${name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, creator})
      });
      if(response.status === 200){
        alert("Pokemon eliminado ")
        window.location.href = "/";
      }else{
        response.json().then((data) => {
          alert(data.error)
        } )
      }
    } catch (e) {
      return new Response(JSON.stringify({error: e}), {
        status: 500
        }
      )
    }
  }

  return (
    <div>
    <div class="around">
      {pokemonL.length > 0 &&
        <div>
          <div class = "principal">
            <h1>{pokemonL[0].name}</h1>
          </div>
          <img class = "centro grande rounded" src = {pokemonL[0].image}/>
          <p><audio class = "centro"controls>
            <source  src={pokemonL[0].sound} type="audio/mpeg"/>
          </audio></p>
          <button class = "centro" onClick={() => setShow(true)}>Delete pokemon</button>
        </div>
      }
        
      </div>
      <div> 
      {show &&
        <section class = "modal">
          <div class = "m">
            <h3 class = "m_title">DELETE POKEMON</h3>
            <p class = "m_paragraph">Name of creator</p>
            <input type="text" value={creator} onInput={(e) => setCreador(e.currentTarget.value)}/>
            <button class = "m_close" onClick={deletePokemon}>Confirm</button>
            <button class = "m_close" onClick={() => setShow(false)}>Cancel</button>
          </div>
        </section>
        }
        </div>
    </div>
  );
};

export default UnPokemon;