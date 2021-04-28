const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors")
const mysql = require("mysql");
const nodemon = require("nodemon");

// conexao com o servidor
const PORT =  3001;

// informando endereço do servidor
app.listen(PORT, () => {
    console.log('running on port: http://localhost:' + PORT)
});

// conexão com banco de dados

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tutubedb'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


// atualização do status do consentimento
app.post('/api/updateTransf', (req,res) => {

    const statusEmail = req.body.statusEmail
    const statusSms = req.body.statusSms

    const sqlUpdate = 'UPDATE PNL_TRANSFERENCIA SET status_email = ?, status_sms = ?, data_modificacao = NOW() WHERE id_usuario = 1 ;'

    db.query(sqlUpdate, [statusEmail, statusSms], (err, result)=>{
        console.log("statusEmail: " + statusEmail + "\n statusSms: " + statusSms + "\n ERROR: " + err + "\n RESULT" + result);
        nodemon.restart()
    })
});


// inserção da atualização no historico
app.post('/api/insertHist', (req, res) => {

    const statusEmail = req.body.statusEmail
    const statusSms = req.body.statusSms

    const sqlInsert = "INSERT INTO PNL_HISTORICO (data_modificacao, status_email, status_sms, id_usuario) VALUES(NOW(), ?, ?, 1) ;"
    db.query(sqlInsert, [statusEmail, statusSms], (err,result) => {
        console.log("statusEmail: " + statusEmail + "\n statusSms: " + statusSms + "\n ERROR: " + err + "\n RESULT" + result);
    })
});


// busca das informações do historico (mais recentes)
app.get('/api/getLast', (req, res) => {
    const sqlSelect = 'SELECT DATE_FORMAT(data_modificacao, "%d/%m/%Y") as data_modificacao, status_email, status_sms FROM PNL_HISTORICO where id_usuario = 1 ORDER BY data_modificacao DESC LIMIT 8;'

    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});



