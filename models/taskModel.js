// models/publicationModel.js
const { db } = require("../config/database.config");

// Definición de la colección "publications" en Firebase
const tasks = db.collection("Tasks");

module.exports = { tasks };
