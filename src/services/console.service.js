const consoler = [
  {
    id: 1,
    name: "Xbox Series S",
    description: "Possui uma memória de 8GB e conta com uma resolução de 144p.",
    image: "./assets/img/Xbox Series S.png",
    price: 3.082,
  },
  {
    id: 2,
    name: "PlayStation 4 ",
    description:
      "Possui uma resolução de 1920px x 1080px e contaa com uma memória RAM de 8GB.",
    image: "./assets/img/PlayStation 4.png",
    price: 3.058,
  },
  {
    id: 3,
    name: "PlayStation 4 ",
    description:
      "Resolução de 1920px x 1080px, Memória RAM de 8GB, Conta com: 1 Cabo HDMI - 1 Cabo USB - 1 Fone de Ouvido Monaural - 1 Cabo de Alimentação CA - 1 Controle",
    image: "./assets/img/PlayStation 4.png",
    price: 3.058,
  },
  {
    id: 4,
    name: "PlayStation 4 ",
    description:
      "Resolução de 1920px x 1080px, Memória RAM de 8GB, Conta com: 1 Cabo HDMI - 1 Cabo USB - 1 Fone de Ouvido Monaural - 1 Cabo de Alimentação CA - 1 Controle",
    image: "./assets/img/PlayStation 4.png",
    price: 3.058,
  },
];
  
const findAllConsoleService = () => {
  return consoler;
};
const findByIdConsoleService = (idParam) => {
  const consoles =  consoler.find((consoler) => consoler.id == idParam);
  return consoles
}

module.exports = {
  findAllConsoleService,
  findByIdConsoleService,
};
