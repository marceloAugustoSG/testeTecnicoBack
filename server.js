import Express from "express"
import routes from "./src/routes/index.js"
import cors from "cors";

const app = Express()

app.set('view engine', 'ejs')
app.use(cors())
app.use(Express.json())

// eu pesquisei, e essa parada aqui serve pro formulario do post no home.ejs funcionar
app.use(Express.urlencoded({ extended: true }));
routes(app)
const port = 3000

app.listen(port);
console.log(`Servidor rodando na porta ${port}`);




