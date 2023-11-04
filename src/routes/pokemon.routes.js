import { create, getAll, renderBuscar, renderHome, renderMinhaPokedex } from "../controllers/Pokemon.Controller.js";

const pokemonRoutes = app => {
    app.post('/pokemon', create)
    app.get('/pokemons', getAll)
    app.get('/home', renderHome)
    app.get('/buscar', renderBuscar)
    app.get('/minhaPokedex', renderMinhaPokedex)
}
export default pokemonRoutes