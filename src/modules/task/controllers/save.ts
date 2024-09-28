import { Task } from "../../../data-source/velaioDB/typeorm/entities/task";
import { RouteController } from "../../../shared/interfaces/routeController";
import { TaskPostgresRepository } from "../repositories/postgresRepository";

export const Save: RouteController = async (req, res) => {
  try {
    const repository = new TaskPostgresRepository();
    if (!parseInt(req.params.id)) res.status(400).json("El id es requerido");

    await repository.save({
      id: parseInt(req.params.id),
      completed: req.body.completed,
    } as Task);
    return res.json(true);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error al actualizar tarea");
  }
};
