const { tasks } = require("../models/taskModel");

module.exports = {
  // Servicio para obtener todas las tareas
  getAll: async () => {
    const allTasks = await tasks.get();
    return allTasks.docs.map((doc) => {
      const data = doc.data();
      if (!data.title) {
        data.title = ""; // Evita error de campo no nulo
      }
      return { id: doc.id, ...data };
    });
  },

  // Servicio para obtener una tarea en específico
  getById: async (id) => {
    const oneTask = await tasks.doc(id).get();
    if (!oneTask.exists) {
      throw new Error("Tarea no encontrada");
    }
    const data = oneTask.data();
    if (!data.title) {
      data.title = "";
    }
    return { id: oneTask.id, ...data };
  },

  // Servicio para crear una nueva tarea
  create: async ({ title, completed }) => {
    const newTask = { title, completed };
    const sendTask = await tasks.add(newTask);
    return { id: sendTask.id, ...newTask };
  },

  // Actualizar una tarea existente
  update: async (id, data) => {
    const taskRef = tasks.doc(id);
    const findTask = await taskRef.get();

    if (!findTask.exists) {
      throw new Error("Tarea no encontrada");
    }

    await taskRef.update(data);
    const updated = await taskRef.get();
    const updatedData = updated.data();
    if (!updatedData.title) {
      updatedData.title = "";
    }

    return { id: updated.id, ...updatedData };
  },

   // Servicio para eliminar una tarea
   delete: async (id) => {
    const taskRef = tasks.doc(id);
    const findTask = await taskRef.get();

    if (!findTask.exists) {
      throw new Error("Tarea no encontrada");
    }

    await taskRef.delete();
    return `Tarea ${id} eliminada correctamente.`;
  }
};
