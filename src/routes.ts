import { Router } from "express";
import taskRouter from "./modules/task/routes";

const allRoutes = Router();

allRoutes.use("/task", taskRouter);

export default allRoutes;
