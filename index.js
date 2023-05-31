const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const data = require('./db.json');


app.use(cors());

app.get('/', async (req, res) => {
    res.send("Whatsapp Accounts");
});

app.get('/api/accounts/:id', async (req, res) => {
    let result = [];
    for (let i = 0; i < data.accounts.length; i++) {
        if (data.accounts[i].phone == req.params.id) {
            let dataUser = {
                phone: data.accounts[i].phone,
                status: data.accounts[i].status,
            }
            result.push(dataUser);
        }
    }
    return res.json(result);
});

app.get('/api/gurubk', async (req, res) => {
    let result = {
        status: false
    };
    return res.json(result);
});


app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));

module.express = app;
