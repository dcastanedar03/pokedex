export const BRefresh = () => {
    return (
        <button class="btn btn-primary" onClick={() => window.location.href = "/"}>Refresh</button>
    );
}

export const BSearch = () => {
    return (
        <button class="btn btn-primary" onClick={() => window.location.href = "/searchpokemon"}>Search</button>
    );
}

export const BNew = () => {
    return (
        <button class="btn btn-primary" onClick={() => window.location.href = "/newpokemon"}>New</button>
    );
}


