const consoleService = require("../services/console.service.js");

const findAllConsoleController = (req, res) => {
  const consoles = consoleService.findAllConsoleService();

  if (consoles.length == 0) {
    return res.status(404).send({ message: "Console não encontrado." });
  }

  res.send(consoles);
};

const findByIdConsoleController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: "Id inválido" });
  }
  const chosenConsole = consoleService.findByIdConsoleService(idParam);
  if (!chosenConsole) {
    return res.status(404).send({ message: "Console não encontrado." });
  }
  res.send(chosenConsole);
};

const createConsoleController = (req, res) => {
  const consoli = req.body;
  if (
    !consoli ||
    !consoli.name ||
    !consoli.description ||
    !consoli.price ||
    !consoli.image
  ) {
    return res.status(400).send({
      message:
        "Você não preencheu todos os dados para adicionar um novo console",
    });
  }
  const newConsoler = consoleService.createConsoleService(consoli);
  res.status(201).send(newConsoler);
};

const updateConsoleController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: "Id inválido" });
  }
  const consoleEdit = req.body;
  if (
    !consoli ||
    !consoli.name ||
    !consoli.description ||
    !consoli.price ||
    !consoli.image
  ) {
    return res.status(400).send({
      message:
        "Envie todos os campos do console!",
    });
  }
  const updatedConsole = consoleService.updateConsoleService(
    idParam,
    consoleEdit
  );
  res.send(updatedConsole);
};

const deleteConsoleController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: "Id inválido." });
  }
  consoleService.deleteConsoleService(idParam);

  res.send({ message: "Console deletado com sucesso!" });
};

module.exports = {
  findAllConsoleController,
  findByIdConsoleController,
  createConsoleController,
  updateConsoleController,
  deleteConsoleController,
};
