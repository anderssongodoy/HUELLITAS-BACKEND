const db = require("../db");

exports.createCliente = (nombre, apellido, userId, callback) => {
    db.query("INSERT INTO clientes (nombre, apellido, id_usuario) VALUES (?, ?, ?)", [nombre, apellido, userId], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.insertId);
        }
    });
};

exports.getClienteById = (id, callback) => {
    db.query("SELECT * FROM clientes WHERE id = ?", [id], (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result.length === 1) {
            callback(null, result[0]);
        } else {
            callback(null, null);
        }
    });
};

exports.updateCliente = (id, newData, callback) => {
    db.query("UPDATE clientes SET ? WHERE id = ?", [newData, id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

exports.changeEvaluationStatus = (id, status, callback) => {
    db.query("UPDATE clientes SET evaluacion = ? WHERE id = ?", [status, id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

exports.getEvaluatedClientes = (callback) => {
    db.query("SELECT * FROM clientes WHERE evaluacion IS NOT NULL", (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};