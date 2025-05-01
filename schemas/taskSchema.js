// schemas/taskSchema.js

// Importamos gql (no gpl) de apollo-server-express
const { gql } = require("apollo-server-express");

// Definimos el esquema GraphQL
const typeDefs = gql`
  # Tipo que representa una tarea
  type Task {
    id: ID! # Identificador único
    title: String! # Título de la tarea
    completed: Boolean! # Estado de completado
  }

  # Consultas disponibles
  type Query {
    tasks: [Task] # Obtener todas las tareas
    task(id: ID!): Task # Obtener una tarea por ID
  }

  # Mutaciones para crear, actualizar y eliminar
  type Mutation {
    createTask(title: String!, completed: Boolean!): Task # Crear una tarea
    updateTask(id: ID!, title: String, completed: Boolean): Task # Actualizar una tarea
    deleteTask(id: ID!): String # Eliminar una tarea
  }
`;

module.exports = typeDefs;
