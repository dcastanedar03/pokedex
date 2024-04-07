import {Pokemon} from "../type.ts";
import { PageProps } from "$fresh/server.ts";
import AddForm from "../islands/AddForm.tsx";

const Page = (props: PageProps<Pokemon[]>) => {
  return (
    <div class = "column">
      <h1 class = "principal">New pokemon</h1>
      <AddForm/>
    </div>
  );
}
export default Page;