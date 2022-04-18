const consoleService = require("../services/console.service.js");

const findAllConsoleController = (req, res) => {
  const consoles = consoleService.findAllConsoleService();
  res.send(consoles);
};

const findByIdConsoleController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenConsole = paletasService.findByIdConsoleService(idParam);
  res.send(chosenConsole);
};

const createConsoleController = (req, res) => {
  const consoli = req.body;
  const newConsoler = consoleService.createConsoleService(consoli);
  res.send(newConsoler);
};

const updateConsoleController = (req, res) => {
  const idParam = Number(req.params.id);
  const consoleEdit = req.body;
  const updatedConsole = consoleService.updateConsoleService(
    idParam,
    consoleEdit
  );
  res.send(updatedConsole);
};

const deleteConsoleController = (req, res) => {
  const idParam = req.params.id;
  consoleService.deleteConsoleService(idParam);
  res.send({ message: 'Console deletado com sucesso!' });
};

module.exports = {
  findAllConsoleController,
  findByIdConsoleController,
  createConsoleController,
  updateConsoleController,
  deleteConsoleController,
};
