import { Router } from "express";
import { getAll } from "./controllers/getAll";
import { deleteById } from "./controllers/deleteById";
import { create } from "./controllers/create";
import { Save } from "./controllers/save";

const taskRouter = Router();

taskRouter.get("/", getAll);
taskRouter.post("/", create);
taskRouter.patch("/:id", Save);
taskRouter.delete("/:id", deleteById);

export default taskRouter;
