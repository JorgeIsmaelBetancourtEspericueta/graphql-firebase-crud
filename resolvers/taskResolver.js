// Importa el servicio de tareas
const taskService = require("../services/taskService");

// Definición de los resolvers para las operaciones de GraphQL
const taskResolver = {
  Query: {
    // Obtener todas las tareas
    tasks: async () => await taskService.getAll(),

    // Obtener una tarea específica por su ID
    task: async (_, { id }) => await taskService.getById(id),
  },

  Mutation: {
    // Crear una nueva tarea
    createTask: async (_, { title, completed }) =>
      await taskService.create({ title, completed }),

    // Actualizar una tarea existente
    updateTask: async (_, { id, title, completed }) =>
      await taskService.update(id, {
        ...(title !== undefined && { title }),
        ...(completed !== undefined && { completed }),
      }),

    // Eliminar una tarea (debes implementar el método delete en taskService)
    deleteTask: async (_, { id }) => {
      return await taskService.delete(id);
    },
  },
};

module.exports = taskResolver;
