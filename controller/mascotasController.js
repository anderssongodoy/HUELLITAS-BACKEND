const mascotaModel = require("../models/mascotaModel");

exports.listNumAnimalesEspecie = (req, res) => {
    mascotaModel.getNumAnimalesPorEspecie((err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener el número de animales por especie" });
        }
        res.status(200).json(result);
    });
};

exports.listMascotasDisponibles = (req, res) => {
    mascotaModel.getMascotasByEstado("Disponible", (err, mascotas) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener las mascotas disponibles" });
        }
        res.status(200).json(mascotas);
    });
};

exports.listAllMascotas = (req, res) => {
    mascotaModel.getAllMascotas((err, mascotas) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener todas las mascotas" });
        }
        res.status(200).json(mascotas);
    });
};

exports.getMascotaById = (req, res) => {
    const mascotaId = req.params.id;
    mascotaModel.getMascotaById(mascotaId, (err, mascota) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener la mascota" });
        }
        if (!mascota) {
            return res.status(404).json({ error: "Mascota no encontrada" });
        }
        res.status(200).json(mascota);
    });
};

exports.createMascota = (req, res) => {
    const nuevaMascota = req.body;
    mascotaModel.createMascota(nuevaMascota, (err, mascotaCreada) => {
        if (err) {
            return res.status(500).json({ error: "Error al crear la mascota" });
        }
        res.status(201).json(mascotaCreada);
    });
};

exports.updateMascota = (req, res) => {
    const mascotaId = req.params.id;
    const datosActualizados = req.body;
    mascotaModel.updateMascota(mascotaId, datosActualizados, (err, mascotaActualizada) => {
        if (err) {
            return res.status(500).json({ error: "Error al actualizar la mascota" });
        }
        if (!mascotaActualizada) {
            return res.status(404).json({ error: "Mascota no encontrada" });
        }
        res.status(200).json(mascotaActualizada);
    });
};

exports.deleteMascota = (req, res) => {
    const mascotaId = req.params.id;
    mascotaModel.deleteMascota(mascotaId, (err, mascotaEliminada) => {
        if (err) {
            return res.status(500).json({ error: "Error al eliminar la mascota" });
        }
        if (!mascotaEliminada) {
            return res.status(404).json({ error: "Mascota no encontrada" });
        }
        res.status(200).json({ message: "Mascota eliminada correctamente" });
    });
};

exports.changeAdoptionStatus = (req, res) => {
    const mascotaId = req.params.id;
    mascotaModel.changeAdoptionStatus(mascotaId, (err, mascotaActualizada) => {
        if (err) {
            return res.status(500).json({ error: "Error al cambiar el estado de adopción" });
        }
        if (!mascotaActualizada) {
            return res.status(404).json({ error: "Mascota no encontrada" });
        }
        res.status(200).json(mascotaActualizada);
    });
};

exports.getRandomAdoption = (req, res) => {
    mascotaModel.getRandomAdoption((err, mascotaAleatoria) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener una mascota aleatoria" });
        }
        res.status(200).json(mascotaAleatoria);
    });
};