const clienteModel = require("../models/clienteModel");

exports.registerCliente = (req, res) => {
    const nuevoCliente = req.body;
    clienteModel.createCliente(nuevoCliente, (err, clienteCreado) => {
        if (err) {
            return res.status(500).json({ error: "Error al registrar el cliente" });
        }
        res.status(201).json(clienteCreado);
    });
};

exports.editCliente = (req, res) => {
    const clienteId = req.params.id;
    const datosActualizados = req.body;
    clienteModel.updateCliente(clienteId, datosActualizados, (err, clienteActualizado) => {
        if (err) {
            return res.status(500).json({ error: "Error al editar el cliente" });
        }
        if (!clienteActualizado) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.status(200).json(clienteActualizado);
    });
};

exports.listClientesMascotasPendientes = (req, res) => {
    clienteModel.getClientesConMascotasPendientes((err, clientes) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener los clientes con mascotas en pendiente" });
        }
        res.status(200).json(clientes);
    });
};

exports.changeEvaluationStatus = (req, res) => {
    const clienteId = req.params.id;
    clienteModel.changeEvaluationStatus(clienteId, (err, clienteActualizado) => {
        if (err) {
            return res.status(500).json({ error: "Error al cambiar el estado de evaluación del cliente" });
        }
        if (!clienteActualizado) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.status(200).json(clienteActualizado);
    });
};

exports.listClientesEvaluados = (req, res) => {
    clienteModel.getClientesEvaluados((err, clientes) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener los clientes evaluados" });
        }
        res.status(200).json(clientes);
    });
};

exports.acceptOrRejectAdoptante = (req, res) => {
    const clienteId = req.params.id;
    const aceptado = req.body.aceptado;
    clienteModel.acceptOrRejectAdoptante(clienteId, aceptado, (err, clienteActualizado) => {
        if (err) {
            return res.status(500).json({ error: "Error al aceptar o rechazar al adoptante" });
        }
        if (!clienteActualizado) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.status(200).json(clienteActualizado);
    });
};