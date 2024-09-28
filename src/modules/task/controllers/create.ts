import { RouteController } from "../../../shared/interfaces/routeController";
import { TaskPostgresRepository } from "../repositories/postgresRepository";

export const create: RouteController = async (req, res) => {
  try {
    const repository = new TaskPostgresRepository();
    const task = await repository.create(req.body);
    res.json(task.identifiers[0].id);
  } catch (err) {
    res.status(500).json("Error al crear tarea");
  }
};
