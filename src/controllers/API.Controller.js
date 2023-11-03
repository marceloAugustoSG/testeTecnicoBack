import fetch from "node-fetch";

export const BuscarPokemonAPI = async (nome) => {

    const PokemonData = {
        nome: String,
        sprite: String,
        tipos: [],
        habilidades: []

    }
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    fetch(apiUrl).then((response) => {
        return response.json()
    }).then((data) => {

        // console.log(data.sprites.front_default)
        PokemonData.sprite = data.sprites.front_default
        PokemonData.nome = data.name
        // console.log(`Nome:${data.name}`)
        if (data.types.length === 1) {
            // console.log(`Tipo(s):${data.types[0].type.name}`)
            PokemonData.tipos.push(data.types[0].type.name)
        } else if (data.types.length > 1) {
            // console.log("Tipo(s):")
            for (const t of data.types) {
                const teste = t.type.name
                PokemonData.tipos.push(teste)
                // console.log(teste)
            }

        }

        if (data.abilities.length > 0) {
            // console.log(`Habilidades:`)
            for (const abilityData of data.abilities) {
                const ability = abilityData.ability.name;
                PokemonData.habilidades.push(ability)
                // console.log(ability);
            }

        }
        console.log(PokemonData)

    })

    return PokemonData
}

