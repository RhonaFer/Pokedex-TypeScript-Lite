import { CatalogoPokemon } from "./services/CatalogoPokemon";
import { buscarPokemon } from "./services/PokeApiService";

async function main() {
    
    const catalogo = new CatalogoPokemon();
    const pikachu = await buscarPokemon("pikachu");

    if(pikachu !== null){
        catalogo.adicionarAoCatalogo(pikachu);
    }
    const charmander = await buscarPokemon("charmander");

    if(charmander !== null){
        catalogo.adicionarAoCatalogo(charmander);
    }

    const pikachuDuplicado = await buscarPokemon("pikachu");

    if(pikachuDuplicado !== null){
        catalogo.adicionarAoCatalogo(pikachuDuplicado);
    }

    await buscarPokemon("pokemon-inexistente");
    catalogo.listarCatalogo();
    catalogo.removerDoCatalogo(25);
    catalogo.listarCatalogo();
}
main();