import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

export const AddForm: FunctionComponent = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [sound, setSound] = useState("");
    const [creator, setCreator] = useState("");
    const [error, setError] = useState("");

    let bool = false;
    const errorMsg: string[] = [];

    const presubmit = () => {
        if(name === ""){
          bool = true;
          errorMsg.push("Nombre no introducido");
        }
        if(image === ""){
          bool = true;
          errorMsg.push("Imagen no introducida");
        }
        if(sound === ""){
          bool = true;
          errorMsg.push("Sonido no introducido");
        }
        if(creator === ""){
          bool = true;
          errorMsg.push("Creador no introducido");
        }
        console.log(errorMsg)
        if(errorMsg.length > 0){
          setError(errorMsg.join(" | "));
        }else{
            setError("")
        }
    }

    const addPokemon = async (e: Event, name: string, image: string, sound: string, creator: string) => {
      e.preventDefault();  
      presubmit();
      if(!bool) {
        const response = await fetch("/api/API", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, image, sound, creator})
            });
          const data = await response.json();
          if(data.error){
            setError(data.error)
          }else{
            alert("Pokemon añadido correctamente");
            window.location.href = "/";
          }
      }
    }

    return (
        <div class="form">
          <h1>Information</h1>
          <form
            method={"POST"}
            onSubmit={(e) => {
              addPokemon(e, name, image, sound, creator)
            }}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={"Name"}
                onInput={(e) => setName(e.currentTarget.value)}
                onFocus={() => setError("")}
                />
            </div>
            <div>
              <input
                type="text"
                id="image"
                name="image"
                placeholder={"Image"}
                onInput={(e) => setImage(e.currentTarget.value)}
                onFocus={() => setError("")}
              />
            </div>
            <div>
            <input
                type="text"
                id="sound"
                name="sound"
                placeholder={"Sound"}
                onInput={(e) => setSound(e.currentTarget.value)}
                onFocus={() => setError("")}
              />
            </div>
            <div>
              <input
                type="text"
                id="creator"
                name="creator"
                placeholder={"Creator"}
                onInput={(e) => setCreator(e.currentTarget.value)}
                onFocus={() => setError("")}
              />
            </div>
            <h1></h1>
            <div>
              <button type="submit">Submit</button>
            </div>
            <div>
              <button
                type="reset"
                class="reset"
                onClick={() => {
                  setName("");
                  setImage("");
                  setSound("");
                  setCreator("");
                  setError("");
                }}
              >
                Reset
              </button>
            </div>
            {error !== "" && <div class="span2 error">{error}</div>}
          </form>
        </div>
      );
};
    


export default AddForm;