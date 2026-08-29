import { PokemonResumo } from "../models/Pokemon";

export class CatalogoPokemon{
    private pokemon : PokemonResumo[] = [];

    adicionarAoCatalogo(pokemon: PokemonResumo): void{

        const exitPokemon = this.pokemon.some(item => item.id === pokemon.id );

        if(!exitPokemon){
            this.pokemon.push(pokemon);
            console.log(`[OK] ${pokemon.nome} adicionado ao catalogo.`);
            return;
        }
        console.log(`[AVISO] ${pokemon.nome} ja esta no catalogo.`);

    }

    listarCatalogo():void{
        if(this.pokemon.length ===0){
            console.log(`[AVISO] Catálogo vazio.`);
            return;
        }
        const lista = this.pokemon.forEach(pokemon =>
            console.log(`#${pokemon.id} | ${pokemon.nome} | ${pokemon.tipos.join('-')} | ${pokemon.altura} | ${pokemon.peso}`)
        );
    }

    removerDoCatalogo(id : number):void{
        const exitId = this.pokemon.find(item => item.id === id);
        if(!exitId){
             console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`);
            return;
        }
        this.pokemon = this.pokemon.filter(item => item.id !== id);
        console.log(`[OK] Pokémon removido do catálogo.`);
    }

}