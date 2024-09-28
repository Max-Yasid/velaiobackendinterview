import { RouteController } from "../../../shared/interfaces/routeController";
import { TaskPostgresRepository } from "../repositories/postgresRepository";

export const deleteById: RouteController = async (req, res) => {
  try {
    const repository = new TaskPostgresRepository();
    const tasks = await repository.delete(req.params.id);
    res.json(tasks.affected > 0);
  } catch (err) {
    res.status(500).json("Error al eliminar tarea");
  }
};
