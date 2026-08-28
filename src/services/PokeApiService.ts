import type { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
        const resposta= await fetch(url);
        if(!resposta.ok){
            console.log("[ERRO] Pokémon não encontrado.");
            return null;
        }
        const dados: PokemonApiResponse = await resposta.json();
        
        const pokemonResumo: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura:dados.height,
            peso: dados.weight

        }; 
        return pokemonResumo;

    } catch (error) {
        console.log("[ERRO] Não foi possível buscar o Pokémon.")
        return null;        
    }

}
