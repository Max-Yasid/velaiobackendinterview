import { AppDataSource } from "../../../data-source/velaioDB/typeorm/conn";
import { Task } from "../../../data-source/velaioDB/typeorm/entities/task";

export class TaskPostgresRepository {
  taskRepository = AppDataSource.getRepository(Task);

  async getAll() {
    return await this.taskRepository.find();
  }

  async delete(id: number) {
    return await this.taskRepository.delete(id);
  }
  async create(task: Task) {
    return await this.taskRepository.insert(task);
  }

  async save(task: Task) {
    console.log(task);
    return await this.taskRepository.save(task);
  }
}
