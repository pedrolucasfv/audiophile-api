const express = require('express')
const cors = require('cors')

const produtoRouter = require("./routes/produto");
require("./config/database");

const app = express()

app.use(express.json())

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use(express.static('public'))

app.use("/produtos", produtoRouter);

app.listen(5000, () => {
    console.log("servidor foi iniciado");
  });
  