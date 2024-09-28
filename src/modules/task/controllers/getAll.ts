import { RouteController } from "../../../shared/interfaces/routeController";
import { TaskPostgresRepository } from "../repositories/postgresRepository";

export const getAll: RouteController = async (req, res) => {
  try {
    const repository = new TaskPostgresRepository();
    const tasks = await repository.getAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json("Error al obtener tareas");
  }
};
