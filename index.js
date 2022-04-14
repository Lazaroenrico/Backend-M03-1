import express from "express";
import cors from "cors";

const port = 4900;
const app = express();

app.use(express.json());
app.use(cors());

//Data definition
const consoler = [
  {
    id: 1,
    name: "Xbox Series S",
    description:
      "Resolução nativa de 1440p, Conta com: 1 Controle - 1 Cabo HDMI - 1 Cabo de alimentação, Memória RAM de 8GB",
    image: "./assets/img/Xbox Series S.png",
    price: 3.082,
  },
  {
    id: 2,
    name: "PlayStation 4 ",
    description:
      "Resolução de 1920px x 1080px, Memória RAM de 8GB, Conta com: 1 Cabo HDMI - 1 Cabo USB - 1 Fone de Ouvido Monaural - 1 Cabo de Alimentação CA - 1 Controle",
    image: "./assets/img/PlayStation 4.png",
    price: 3.58,
  },
];

/*Get All*/
app.get("/consoler/find-consoler", (req, res) => {
  res.send(consoler);
  
  console.log(consoler)
});

/* GET by id*/
app.get("/consoler/find-consoler/:id", (req, res) => {
  const idParam = Number(req.params.id);
  const chosenConsole = consoler.find((consoler) => consoler.id == idParam);
  res.send(chosenConsole);
});

app.listen(port, () => {
  (`Servidor rodando em http://localhost:${port}  `);
});
