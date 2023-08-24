const db = require("../db");

exports.getAllMascotas = (callback) => {
    db.query("SELECT * FROM mascotas", (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

exports.getNumAnimalesPorEspecie = (callback) => {
    db.query("SELECT especie, COUNT(*) AS numero FROM mascotas GROUP BY especie", (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

exports.getMascotaById = (id, callback) => {
    db.query("SELECT * FROM mascotas WHERE id = ?", [id], (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result.length === 1) {
            callback(null, result[0]);
        } else {
            callback(null, null);
        }
    });
};

exports.createMascota = (mascotaData, callback) => {
    db.query("INSERT INTO mascotas SET ?", mascotaData, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.insertId);
        }
    });
};

exports.updateMascota = (id, newData, callback) => {
    db.query("UPDATE mascotas SET ? WHERE id = ?", [newData, id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

exports.deleteMascota = (id, callback) => {
    db.query("DELETE FROM mascotas WHERE id = ?", [id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

exports.changeAdoptionStatus = (id, status, callback) => {
    db.query("UPDATE mascotas SET estado = ? WHERE id = ?", [status, id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

exports.getRandomAdoption = (callback) => {
    db.query("SELECT * FROM mascotas WHERE estado = 'Disponible' ORDER BY RAND() LIMIT 1", (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result.length === 1) {
            callback(null, result[0]);
        } else {
            callback(null, null);
        }
    });
};

exports.getMascotasByEstado = (estado, callback) => {
    db.query("SELECT * FROM mascotas WHERE estado = ?", [estado], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

