# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Trello.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/RhonaFer/Pokedex-TypeScript-Lite.git

Acesse a pasta do projeto:

cd "Pokedex TypeScript Lite"

Instale as dependências:

npm install
Como executar
Execute o projeto em ambiente de desenvolvimento:

npm run dev
npm run start
Estrutura do projeto

Pokedex TypeScript Lite/

│

├── src/

│   ├── models/
│   ├         ├── Pokemon.ts
│   ├── services/
│   ├         ├── CatalogoPokemon.ts 
│   ├         ├── PokeApiService.ts       
│   └── main.ts
│

├── package.json
├── README.MD
└── tsconfig.json

Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

Entrada testada:

pikachu

Saída obtida:

[OK] Pokémon encontrado: pikachu

#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
Busca inválida
Entrada testada:

pokemon-inexistente

Saída obtida:

[ERRO] Pokémon não encontrado.
Duplicidade

Entrada testada:

adicionar pikachu duas vezes

Saída obtida:

[AVISO] pikachu já está no catálogo.
Remoção

Entrada testada:

remover ID 25

Saída obtida:
[OK] Pokémon removido do catálogo.

Conceitos aplicados

TypeScript
Explique onde foram utilizados tipos, interfaces, parâmetros e retornos tipados:
*A interface PokemonResumo foi criada no arquivo de modelos para definir a estrutura simplificada de um Pokémon
*Os parâmetros das funções e métodos também foram tipados.
*CatalogoPokemon, o método adicionar recebe um parâmetro tipo PokemonResumo.
*O método remover recebe um id tipo number
*função assíncrona buscarPokemon retornar um tipado como "Promise<PokemonResumo> | null"
*Os métodos utilizam o tipo void, pois executam ações no catálogo sem a necessidade de retornar um valor.

Interface PokemonResumo
Explique o objetivo da interface criada para representar os dados simplificados do Pokémon:

*Simplificar os dados retornados pela PokeAPI, mantendo apenas os dados essenciais pela app.


Fetch e async/await
Explique como a aplicação consulta a PokeAPI:
*Uma função assíncrona chamada buscarPokemon. Recebe o nome ou ID Pokémon como parâmetro e utiliza a função fetch para realizar uma requisição HTTP.
*são utilizados async e await para aguardar a resposta da API.

Tratamento de erros
Explique como o projeto lida com Pokémon inexistente ou erro de busca:
*Após realizar a consulta com fetch, a aplicação verifica se a resposta foi bem-sucedida por meio de response.ok.
*Caso o Pokémon não exista, a API retorna uma resposta de [ERRO] Pokémon não encontrado.
*A consulta é protegida com um bloco try/catch, que permite tratar possíveis erros de conexão ou falhas durante a requisição.
*antes de adicionar um Pokémon ao catálogo, a aplicação verifica se o resultado é diferente de null

Métodos de array
Informe onde foram usados map, filter, find, some e forEach:
*map: Função buscarPokemon para transformar a lista de tipos em um array contendo apenas os nomes dos tipos Pokémon.
*some: Classe CatalogoPokemon, no método adicionarAoCatalogo, para verificar se já existe um Pokémon com o mesmo ID no catálogo.
*forEach: Método listarCatalogo para percorrer todos os Pokémon armazenados no catálogo e exibir suas informações no terminal.
*filter: Método removerDoCatalogo para criar um novo array sem o Pokémon que possui o ID informado.
*find: Método removerDoCatalogo para verificar o Pokémon com o mesmo ID no catálogo


Classe CatalogoPokemon
Explique quais atributos e métodos foram criados:
*CatalogoPokemon, foi criado o atributo privado pokemons, armazena os Pokémon adicionados ao catálogo durante a execução da aplicação.
*A classe possui três métodos principais: -adicionarAoCatalogo, -listarCatalogo, -removerDoCatalogo

Organização do Trello

Link do Trello: 

Chttps://trello.com/b/oF3rMILF/meu-quadro-do-trello

Branches utilizadas

- main
- develop
- develop-estructura estrutura para melhoras futuras

Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express