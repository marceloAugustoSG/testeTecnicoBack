import prisma from '../services/PrismaClient.js'

class Pokemon {

    async CreatePokemon(data) {
        const pokemon = await prisma.pokemon.create({
            data,
            select: {
                id: true,
                nome: true
            }

        })
        return pokemon;
    }

    async AllPokemons() {
        const pokemons = await prisma.pokemon.findMany({
            select: {
                id: true,
                nome: true,
                tipos: true,
                habilidades: true
            }
        })

        return pokemons;



    }
}
export default new Pokemon();
