import Express from "express"
import routes from "./src/routes/index.js"
import cors from "cors";
import { BuscarPokemonAPI } from "./src/controllers/API.Controller.js";
const app = Express()


app.use(cors())
app.use(Express.json())
routes(app)
const port = 3000

app.listen(port);

console.log(`Servidor rodando na porta ${port}`);


BuscarPokemonAPI('pikachu')

