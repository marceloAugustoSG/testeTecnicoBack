# Documentação 
### Teste Técnico - Backend 
## Introdução

Este documento descreve a implementação de um sistema backend para uma aplicação que permite ao usuário buscar e armazenar informações sobre um pokémon da [PokeAPI](https://pokeapi.co/). O sistema permite a busca de Pokémon por nome ou ID e armazena essas informações em um banco de dados Sqlite.

## Requisitos

- Implementar uma API que permita buscar informações de Pokémon por nome ou ID.
- Armazenar informações dos Pokémon em um banco de dados para acesso posterior.
- Utilizar a [PokeAPI](https://pokeapi.co/) para obter dados sobre os Pokémon.


## Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma ORM - SQlite
- EJS
- Fetch (para fazer requisições à PokeAPI)

## Estrutura da Aplicação

1. **Requisição de Busca de Pokémon**: Essa aplicação back end possui uma função que busca o pokemon pelo nome ou id

2. **Banco de Dados de Pokémon**: Utiliza um banco de dados para armazenar informações sobre Pokémon, incluindo ID,nome, tipos, habilidadades e spriteImage para armazenar um link da imagem de sprite do pokemon.

3.  **API de Busca de Pokémon**: Esta API possui uma rota de busca para buscar um pokémon por nome ou ID na PokeAPI.

4. **Views utilizando o EJS** : Esta aplicação tem uma interface utilizada pra mostrar ao usuario as informações do pokemon de um forma mais amigavel

5. **Renderizando as views** : Para renderizar as views, inicie o servidor, vá até o navegador:

- Acesse localhost:3000/home para a tela inicial.Essa tela inicial contem um campo de busca e as informações do pokemon buscado
- Na tela inicial, ao clicar em minha pokedex, é renderizada a tela de minha Pokedex em localhost:3000/minhaPokedex, nesta tela é apresentado todos os pokemons que foram adicionados pelo usuario.

## Rotas da API

- `GET localhost:3000/pokemons`: Esta rota permite buscar todos os pokemons salvos no banco de dados.

- `POST localhost:3000/pokemon`: Esta rota permite armazenar as informações de um Pokémon no banco de dados. Os dados do Pokémon são enviados no corpo da requisição.

## Banco de Dados

O banco de dados armazena informações sobre os Pokémon em uma coleção chamada "pokemon". Cada documento da coleção representa um Pokémon e inclui campos como:

- `_id`: Identificador único do Pokémon.
- `nome`: Nome do Pokémon.
- `tipos`: Tipos do Pokémon.
- `haibilidades`:Habilidades do Pokemon
- `spriteImage`:Sprite do Pokemon

## Configuração do Projeto

Para configurar e executar o projeto em seu ambiente, siga estas etapas:

1. Clone o repositório do projeto.
2. É necessário ter instalado o sqlite 
2. Instale as dependências usando `yarn`.
3. Configure as variáveis de ambiente para o banco de dados e as chaves de API da PokeAPI em um arquivo .env.
4. Execute o aplicativo usando `yarn dev`.

## Uso da API

Acesse a API através das rotas mencionadas anteriormente para buscar e armazenar informações sobre Pokémon.

Exemplo de solicitação para buscar todos os pokémons que estão salvos no banco de dados:

```
GET localhost:3000/pokemons
```

Exemplo de solicitação para armazenar informações de um Pokémon:

```
POST localhost:3000/pokemon
{
  "id": 25,(o id é auto incremental,não precisa dele na requisição)
  "nome": "pikachu",
  "tipos": "electric",
  "habilidades":"static , lightning-rod"
  }
}
```

## Conclusão

Este projeto implementa um sistema backend que permite buscar e armazenar informações sobre Pokémon da PokeAPI. Ele oferece uma API para consulta de Pokémon e utiliza um banco de dados para armazenar essas informações. Siga as etapas de configuração mencionadas para executar o projeto em seu ambiente.
