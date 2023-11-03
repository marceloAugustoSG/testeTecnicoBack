import { create, getAll } from "../controllers/Pokemon.Controller.js";


const pokemonRoutes = app => {
    app.post('/pokemon', create)
    app.get('/pokemons', getAll)

}
export default pokemonRoutes