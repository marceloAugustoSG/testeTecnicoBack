import Express from "express"
const app = Express()

const port = 3000


app.get('/', (req, res) => {
    res.send('Bem vindo a api 😁')
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})