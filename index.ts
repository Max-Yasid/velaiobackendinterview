import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "reflect-metadata";
import allRoutes from "./src/routes";
import "./src/data-source/velaioDB/typeorm/conn";

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use("/", allRoutes);

app.listen(process.env.port || 4000, () => {
  console.log(`app listening on port ${process.env.port || 4000}`);
});
