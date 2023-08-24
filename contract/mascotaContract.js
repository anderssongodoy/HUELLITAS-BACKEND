/**
 * @swagger
 * tags:
 *   name: API Mascota
 *   description: API con las operaciones CRUD para Mascota
 * definitions:
 *   Mascota:
 *     title: Mascota
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: ID único de la mascota
 *       nombre:
 *         type: string
 *         description: Nombre de la mascota
 *       especie:
 *         type: string
 *         description: Especie de la mascota
 *       estado:
 *         type: string
 *         description: Estado de la mascota (Disponible, Pendiente, etc.)
 *   ListaMascota:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Mascota'
 */

/**
 * @swagger
 * /api/mascotas:
 *   get:
 *     summary: Obtener todas las mascotas
 *     tags: [API Mascota]
 *     responses:
 *       200:
 *         description: Lista de mascotas
 *         schema:
 *               $ref: '#/definitions/ListaMascota'
 *       400:
 *         description: Error al listar mascotas
 *       500:
 *         description: Error interno del servidor al listar mascotas
 *   post:
 *     summary: Crear una nueva mascota
 *     tags: [API Mascota]
 *     parameters:
 *       - in: body
 *         name: mascota
 *         description: Información de la mascota a crear
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *               description: Nombre de la mascota
 *             especie:
 *               type: string
 *               description: Especie de la mascota
 *             estado:
 *               type: string
 *               description: Estado de la mascota
 *     responses:
 *       200:
 *         description: Mascota creada exitosamente
 *         schema:
 *            $ref: '#/definitions/Mascota'
 *       400:
 *         description: Error al crear mascota
 *       500:
 *         description: Error interno del servidor al crear mascota
 */
/**
 * @swagger
 * /api/mascotas/{id}:
 *   get:
 *     summary: Obtener una mascota por su ID
 *     tags: [API Mascota]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la mascota a obtener
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Mascota encontrada exitosamente
 *         schema:
 *               $ref: '#/definitions/Mascota'
 *       400:
 *         description: Error al obtener mascota por ID
 *       500:
 *         description: Error interno del servidor al obtener mascota por ID
 *   put:
 *     summary: Actualizar una mascota por su ID
 *     tags: [API Mascota]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la mascota a actualizar
 *         required: true
 *         type: integer
 *       - in: body
 *         name: mascota
 *         description: Información de la mascota actualizada
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Mascota'
 *     responses:
 *       200:
 *         description: Mascota actualizada exitosamente
 *         schema:
 *               $ref: '#/definitions/Mascota'
 *       400:
 *         description: Error al actualizar mascota por ID
 *       500:
 *         description: Error interno del servidor al actualizar mascota por ID
 *   delete:
 *     summary: Eliminar una mascota por su ID
 *     tags: [API Mascota]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la mascota a eliminar
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Mascota eliminada exitosamente
 *         schema:
 *               $ref: '#/definitions/Mascota'
 *       400:
 *         description: Error al eliminar mascota por ID
 *       500:
 *         description: Error interno del servidor al eliminar mascota por ID
 */

/**
 * @swagger
 * /api/mascotas/adopcion-aleatoria:
 *   get:
 *     summary: Obtener una mascota aleatoria para adopción
 *     tags: [API Mascota]
 *     responses:
 *       200:
 *         description: Mascota aleatoria obtenida exitosamente
 *         schema:
 *               $ref: '#/definitions/Mascota'
 *       400:
 *         description: Error al obtener mascota aleatoria para adopción
 *       500:
 *         description: Error interno del servidor al obtener mascota aleatoria para adopción
 */