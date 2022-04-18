
const router = require("express").Router();
const controllerConsoles = require("../controllers/Console.Controller.js");

router.get('/find-consoler', controllerConsoles.findAllConsoleController);
router.get('/find-consoler/:id', controllerConsoles.findByIdConsoleController)
router.post('/create', controllerConsoles.createConsoleController);
router.put('/update/:id',controllerConsoles.updateConsoleController);
router.delete('/delete/:id', controllerConsoles.deleteConsoleController);

module.exports = router;

