const express = require('express')
const router = express.Router();

//CTODAS AS ROTAS DEPENDEM DE UM CONTROLADOR
//CONTROLLER
const ToughtController = require("../controllers/ToughtController");

router.get("/", ToughtController.showThoughts);

module.exports = router;
