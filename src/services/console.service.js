const consoler = [
  {
    id: 1,
    name: "Xbox Series S",
    description: "Possui uma memória de 8GB e conta com uma resolução de 144p e possui todas as entradas padrões.",
    image: "./assets/img/Xbox Series S.png",
    price: 3.082,
  },
  {
    id: 2,
    name: "PlayStation 4 ",
    description:
    "Possui uma resolução de 1920px por 1080px e conta com uma memória RAM de 8GB e possui todas as entradas padrões.",
    image: "./assets/img/PlayStation 4.png",
    price: 3.058,
  },
  {
    id: 3,
    name: "Nintendo Switch",
    description:
      "Possui 32GB de memória Ram com uam tela de 6.2 polegadas, podendo jogar com uma resolução de 1080p.",
    image: "./assets/img/Nitendo.png",
    price: 2.374,
  },
  {
    id: 4,
    name: " Playstation 3 ",
    description:
      "Possui todas as entradas padrões, suportando roda jogos com resoluções de até 720p. ",
    image: "./assets/img/Playstation 3.png",
    price: 2.374,
  },

];
  
const findAllConsoleService = () => {
  return consoler;
};
const findByIdConsoleService = (idParam) => {
  const consoles =  consoler.find((consoler) => consoler.id == idParam);
  return consoles
}

const createConsoleService = (newConsoler) => {
  const newId =  consoler.length + 1;
  newConsoler.id = newId;
  consoler.push(newConsoler);
  return newConsoler;
}

const updateConsoleService = (id,consoleEdited) => {
  consoleEdited['id'] = id;
  const consoleIndex = consoler.findIndex((consoler) => consoler.id == id);/* passivo a erro */
  consoler[consoleIndex] = consoleEdited;
  return consoleEdited;
}

const deleteConsoleService = (id) => {
  const consoleIndex = consoler.findIndex((consoler) => consoler.id == id);/* passivo a erro */ 
  return consoler.splice(consoleIndex, 1);
}
  

module.exports = {
  findAllConsoleService,
  findByIdConsoleService,
  createConsoleService,
  updateConsoleService,
  deleteConsoleService,
};
