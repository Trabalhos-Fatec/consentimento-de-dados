import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())


// servidor roda na porta 3000
const port = 3030
const app = express()

app.get('/server', (req, res) => {})
app.get('/', (req, res) => {
  res.json({status: 'Rodando Perfeitamente!'})
})


// teste de servidor
app.post('/users', (req, res) => {
    users.push(req.body)
    res.json({ status: 'Usuario cadastrado com sucesso!' })
  })

app.listen(port, () => {
  console.log(`Servidor esta rodando no endereço localhost: ${port}`)
})