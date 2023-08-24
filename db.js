const mysql = require("mysql");

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "sistemaalbergue",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
    } else {
        console.log("Conexión a la base de datos establecida.");
    }
});

module.exports = connection;