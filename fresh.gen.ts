// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_API from "./routes/api/API.tsx";
import * as $api_name_ from "./routes/api/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $newpokemon from "./routes/newpokemon.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $searchpokemon from "./routes/searchpokemon.tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $Bottons from "./islands/Bottons.tsx";
import * as $List from "./islands/List.tsx";
import * as $Search from "./islands/Search.tsx";
import * as $Show from "./islands/Show.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/API.tsx": $api_API,
    "./routes/api/[name].tsx": $api_name_,
    "./routes/index.tsx": $index,
    "./routes/newpokemon.tsx": $newpokemon,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
    "./routes/searchpokemon.tsx": $searchpokemon,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/Bottons.tsx": $Bottons,
    "./islands/List.tsx": $List,
    "./islands/Search.tsx": $Search,
    "./islands/Show.tsx": $Show,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
