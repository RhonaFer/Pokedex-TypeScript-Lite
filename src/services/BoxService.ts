import { PokemonResumo } from "../models/Pokemon";

export const catalogo: PokemonResumo[] = [];

export function adicionarAoCatalogo(catalogo : PokemonResumo[], pokemon : PokemonResumo) : PokemonResumo[]{

    const exitPokemon = catalogo.some(item => item.id === pokemon.id);

    if(!exitPokemon){
        catalogo.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catalogo.`);

        return catalogo;
    }

    console.log(`[AVISO] ${pokemon.nome} ja esta no catalogo.`);
    return catalogo;
    
}

export function listarCatalogo(catalogo : PokemonResumo[] ) : void{

    if(catalogo.length === 0){
        console.log(`[AVISO] Catálogo vazio.`);
        return;
    }

    const lista = catalogo.forEach(pokemon =>
        console.log(`#${pokemon.id} | ${pokemon.nome} | ${pokemon.tipos.join('-')} | ${pokemon.altura} | ${pokemon.peso}`)
    );

}

export function removerDoCatalogo(catalogo: PokemonResumo[], id:number): PokemonResumo[]{
    const exitId = catalogo.find(item => item.id === id)
    if(!exitId){
        console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`);
        return catalogo;
    }
    catalogo = catalogo.filter(item => item.id !== id);
    console.log(`[OK] Pokémon removido do catálogo.`);

    return catalogo;
}
