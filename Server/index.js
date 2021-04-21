const express = require("express");
const app = express();
const mysql = require("mysql");

// conexão com banco de dados

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    pass: 'password',
    database: 'tutubeDB'
});

// conexao com o servidor
const PORT =  3001;

app.get('/', (req,res) => {
    const sqlInsert = 'QUERY AQUI'
    db.query()
    res.send('working')
});

// informando endereço do servidor
app.listen(PORT, () => {
    console.log('running on port: http://localhost:' + PORT)
});


