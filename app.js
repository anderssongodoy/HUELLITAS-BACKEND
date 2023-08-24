const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const bodyParser = require("body-parser");
const mascotasRoutes = require("./routes/mascotasRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');
require("dotenv").config({ path: "./properties.env" });


// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto al dominio de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

//+++INICIO CONFIGURACION DEL BACKEND+++//
// Configuración para analizar el cuerpo de las solicitudes JSON
app.use(express.json());
// Configuración para analizar el cuerpo de las solicitudes URL codificado
app.use(express.urlencoded({ extended: true }));
//Reter por cada API
app.use("/api", mascotasRoutes);
app.use("/api", clienteRoutes);
app.use("/api", userRoutes);
//+++FIN CONFIGURACION DEL BACKEND+++//

//+++INICIO CONFIGURACION DEL SWAGGER+++//
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API PROYECTO FINAL',
            description: 'Documentación de la API con Swagger',
            version: '1.0.0',
        },
    },
    apis: ['./contract/mascotaContract.js'],
};
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/', (req, res) => {
    res.redirect('/api-docs/');
});
//+++FIN CONFIGURACION DEL SWAGGER+++//


const port = process.env.PORT;
const host = process.env.HOST
app.listen(port, host, () => {
    console.log(`Servidor en ejecución en http://${host}:${port}`);
});