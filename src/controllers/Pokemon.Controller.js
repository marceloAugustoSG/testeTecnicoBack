import PokemonModel from "../models/Pokemon.model.js";
import prisma from "../services/PrismaClient.js";
import fetch from "node-fetch";

export const create = async (req, res) => {

    try {
        const { nome, tipo, spriteImage, habilidade } = req.body
        console.log(`alo: ${nome}
        spriteImage:${spriteImage}
        tipos: ${tipo}`
        )
        const isExistPokemon = await prisma.pokemon.findUnique({
            where: {
                nome: nome
            }
        })
        if (isExistPokemon) {

            res.status(400).json({ messageError: "Pokemon já existe em nossa base de dados" })

        } else {
            const data = req.body
            console.log(data)
            await PokemonModel.CreatePokemon(data)
            res.status(200).json({ message: "Pokemon salvo com sucesso!" })
        }

    } catch (error) {
        res.status(400).json({ messageError: `${error}` })
    }
};
export const getAll = async (req, res) => {
    try {
        const pokemons = await PokemonModel.AllPokemons()
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json({ messageError: `${error}` })
    }
}
export const buscarPokemonAPI = async (nome) => {

    //objeto para as info do pokemon
    const PokemonData = {
        nome: '',
        spriteImage: '',
        tipos: '',
        habilidades: ''
    };
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nome}`;
    try {
        const response = await fetch(apiUrl);

        if (response.status === 404) {
            // Nenhum Pokémon encontrado, lançar um erro personalizado.
            throw new Error('Pokemon não encontrado');
        }

        if (!response.ok) {
            // Lidar com outros erros da API, se necessário.
            throw new Error('Erro inesperado');
        }

        const data = await response.json();
        PokemonData.spriteImage = data.sprites.front_default;
        PokemonData.nome = data.name;

        if (data.types.length > 0) {
            PokemonData.tipos = data.types.map((t) => t.type.name)
        }

        if (data.abilities.length > 0) {
            PokemonData.habilidades = data.abilities.map((abilityData) => abilityData.ability.name)
        }

        console.log(PokemonData);

        return PokemonData;
    } catch (error) {
        console.error("Erro na busca de Pokémon:", error);
        throw error;
    }
};

export const renderHome = async (req, res) => {
    const pokemon = await buscarPokemonAPI(1)
    res.render("../src/views/home", { pokemon })

}



export const renderBuscar = async (req, res) => {
    const nomePokemon = req.query.nome;
    try {
        const pokemon = await buscarPokemonAPI(nomePokemon);
        console.log(pokemon)

        if (pokemon) {

            res.render('../src/views/home', { pokemon });
        } else {
            // erro quando o Pokémon não é encontrado.
            res.render('../src/views/erro', { mensagem: 'Nenhum Pokémon encontrado para o nome fornecido' });
        }
    } catch (error) {
        // console.error("Erro ao buscar Pokémon:", error);
        res.status(500).send('Erro ao buscar Pokémon');
    }


}

export const renderMinhaPokedex = async (req, res) => {

    try {
        const pokemons = await PokemonModel.AllPokemons()

        if (pokemons) {
            res.render('../src/views/minhaPokedex', { pokemons });
        }
        else {
            // erro quando o Pokémon não é encontrado.
            res.render('../src/views/erro', { mensagem: 'Nenhum Pokémon encontrado para o nome fornecido' });
        }
    } catch (error) {

    }
}
