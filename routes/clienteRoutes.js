const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

router.post("/register", clienteController.registerCliente);
router.put("/:id", clienteController.editCliente);
router.get("/mascotas-pendientes", clienteController.listClientesMascotasPendientes);
router.post("/:id/evaluar", clienteController.changeEvaluationStatus);
router.get("/evaluados", clienteController.listClientesEvaluados);
router.post("/:id/aceptar", clienteController.acceptOrRejectAdoptante);

module.exports = router;