import PokemonL from "../islands/List.tsx"
import {Pokemon} from "../type.ts";
import { PageProps } from "$fresh/server.ts";
import {BNew, BSearch, BRefresh} from "../islands/Bottons.tsx";

const Page = (props: PageProps<Pokemon[]>) => {
  return (
    <body>
      <div class = "column">
        <div class = "principal">
        <h1 >Pokedex</h1>
        <BRefresh/> <BSearch/> <BNew/>
        </div>
        <PokemonL/>
      </div>
    </body>
  );
}
export default Page;