const bodyParser = require("body-parser")
const express = require ('express');
const app = express();

app.use(bodyParser.json())
contador = 0
lembretes = [];

app.get ('/lembretes', (req, res) => {
    res.send(lembretes)
});
app.put ('/lembretes', (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador]= {
        contador,texto
    }

    res.status(200).send(lembretes[contador]);
});

app.listen(4000, () => {
console.log('Lembretes. Porta 4000');
});