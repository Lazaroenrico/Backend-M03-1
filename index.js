
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/console.routes.js")

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/consoler',routes)


app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}  `);
});
