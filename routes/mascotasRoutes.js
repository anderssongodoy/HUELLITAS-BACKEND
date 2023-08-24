const express = require("express");
const router = express.Router();
const mascotasController = require("../controller/mascotasController");

router.get("/mascotas/num-animales-especie", mascotasController.listNumAnimalesEspecie); //USADA
router.get("/mascotas/disponibles", mascotasController.listMascotasDisponibles); //USADA
router.get("/mascotas", mascotasController.listAllMascotas);
router.get("/mascotas/adopcion-aleatoria", mascotasController.getRandomAdoption); //USADA
router.get("/mascotas/:id", mascotasController.getMascotaById);
router.post("/mascotas", mascotasController.createMascota);
router.put("/mascotas/:id", mascotasController.updateMascota);
router.delete("/mascotas/:id", mascotasController.deleteMascota);
router.post("/mascotas/:id/adoptar", mascotasController.changeAdoptionStatus);

module.exports = router;