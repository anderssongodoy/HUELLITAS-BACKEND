const db = require("../db");

exports.getUserByEmail = (email, callback) => {
    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result.length === 1) {
            callback(null, result[0]);
        } else {
            callback(null, null);
        }
    });
};

exports.createUser = (email, password, role, callback) => {
    db.query("INSERT INTO usuarios (email, password, role) VALUES (?, ?, ?)", [email, password, role], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.insertId);
        }
    });
};

exports.getUserById = (userId, callback) => {
    db.query("SELECT * FROM usuarios WHERE id = ?", [userId], (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result.length === 1) {
            callback(null, result[0]);
        } else {
            callback(null, null);
        }
    });
};

exports.updateUser = (userId, newData, callback) => {
    db.query("UPDATE usuarios SET ? WHERE id = ?", [newData, userId], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

exports.getSolicitudesByUserId = (userId, callback) => {
    db.query(
        "SELECT mascotas_adopcion.id AS solicitud_id, mascotas.id AS mascota_id, mascotas.nombre AS mascota_nombre, mascotas.imagen AS mascota_imagen " +
        "FROM mascotas_adopcion " +
        "JOIN mascotas ON mascotas_adopcion.id_mascota = mascotas.id " +
        "WHERE mascotas_adopcion.id_cliente = ?",
        [userId],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
};

exports.getUserDataByUserId = (userId, callback) => {
    db.query(
        "SELECT clientes.nombre, clientes.apellido, usuarios.email, usuarios.password " +
        "FROM clientes " +
        "JOIN usuarios ON clientes.id_usuario = usuarios.id " +
        "WHERE usuarios.id = ?",
        [userId],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else if (result.length === 1) {
                callback(null, result[0]);
            } else {
                callback(null, null);
            }
        }
    );
};