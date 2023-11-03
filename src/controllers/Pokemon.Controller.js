import PokemonModel from "../models/Pokemon.model.js";
import prisma from "../services/PrismaClient.js";

export const create = async (req, res) => {

    try {
        const nome = req.body.nome
        const isExistPokemon = await prisma.pokemon.findUnique({
            where: {
                nome: nome
            }
        })
        if (isExistPokemon) {

            res.status(400).json({ messageError: "Pokemon já existe em nossa base de dados" })

        } else {
            const data = req.body
            const newPokemon = await PokemonModel.CreatePokemon(data)
            res.status(200).json(newPokemon)
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