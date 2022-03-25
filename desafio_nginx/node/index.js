const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

app.get('/', (req, res) => {

    var connection = mysql.createConnection(config)
    var sql = `INSERT INTO people(name) values('Random name ${Math.floor(Math.random() * 1000)}')`
    connection.query(sql)
    connection.query("SELECT * FROM people", function (err, result) {
        if (err) throw err;
        var listHtml = '';
        result.forEach((value, index) => {
            listHtml += `<li>${value.name}</li>`
        })
        res.send(`
            <html>
                <head>
                    <title>Full Cycle - Guilherme Santos</title>
                </head>
                <body style='background-color:#2D2D2D; color:#FFCD00'>
                <h1 style="color: #FFCD00;font-family: Source Sans Pro;">Full Cycle</h1>
                <button onClick="window.location.reload();">Create New User</button>
                <ol>
                ${listHtml}
                </ol>
                </body>
            <html>
        `)
    });

    connection.end()
})



app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

