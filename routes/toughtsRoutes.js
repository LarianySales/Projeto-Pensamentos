const express = require("express");
const router = express.Router();

//CTODAS AS ROTAS DEPENDEM DE UM CONTROLADOR
//CONTROLLER
const ToughtController = require("../controllers/ToughtController");
//importar milddleware de importação de usuário
const checkAuth = require("../helpers/auth").checkAuth;

router.get("/dashboard",checkAuth, ToughtController.dashboard);
router.get("/add",checkAuth, ToughtController.createTought);
router.post("/add",checkAuth, ToughtController.createToughtSave);
router.get("/", ToughtController.showThoughts);

module.exports = router;
