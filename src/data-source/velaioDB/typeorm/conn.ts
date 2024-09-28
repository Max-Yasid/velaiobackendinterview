import { DataSource } from "typeorm";
import { Task } from "./entities/task";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.dbHost,
  port: process.env.dbPort as unknown as number,
  username: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbName,
  entities: [Task],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("db initialized successfully");
  })
  .catch((error) => console.log(error));
