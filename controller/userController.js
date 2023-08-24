const userModel = require("../models/userModel");
const clienteModel = require("../models/clienteModel");

exports.registerUser = (req, res) => {
    const newUser = req.body;
    userModel.createUser(newUser, (err, userCreated) => {
        if (err) {
            return res.status(500).json({ error: "Error al registrar el usuario" });
        }

        if (userCreated.rol === "Cliente") {
            const newCliente = {
                usuario_id: userCreated.id,
                nombre: newUser.nombre,
                apellido: newUser.apellido,
            };

            clienteModel.createCliente(newCliente, (err, clienteCreado) => {
                if (err) {
                    return res.status(500).json({ error: "Error al registrar el cliente" });
                }
                res.status(201).json({ user: userCreated, cliente: clienteCreado });
            });
        } else {
            res.status(201).json(userCreated);
        }
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    userModel.getUserByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Error al autenticar al usuario" });
        }
        if (!user) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }

        // Aquí podrías generar un token de autenticación si lo deseas

        res.status(200).json(user);
    });
};

exports.getUserProfile = (req, res) => {
    const userId = req.user.id;

    userModel.getUserById(userId, (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener los datos del usuario" });
        }
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    });
};

exports.listSolicitudesByUserId = (req, res) => {
    const userId = req.params.userId;
    userModel.getSolicitudesByUserId(userId, (err, solicitudes) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener las solicitudes de adopción" });
        }
        res.status(200).json(solicitudes);
    });
};

exports.getUserDataByUserId = (req, res) => {
    const userId = req.params.userId;

    userModel.getUserDataByUserId(userId, (err, userData) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener los datos del usuario" });
        }
        if (!userData) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(userData);
    });
};