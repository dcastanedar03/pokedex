import { PageProps, Handlers, FreshContext } from "$fresh/server.ts";
import UnPokemon from "../../islands/Show.tsx";

export const handler: Handlers = {
    GET: (_req: Request, ctx: FreshContext<unknown, string>) => {
        try{
            const {name} = ctx.params;
            return ctx.render(name)
        }catch(e){
            return new Response(JSON.stringify({error: e}), {status: 500})
        }
    }
}

const Page = (props: PageProps<string>) => {
    const {data} = props;
    return (
        <div class = "column">
        <UnPokemon name = {data}/>
        </div>
    );
}
export default Page;