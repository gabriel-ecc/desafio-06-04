import { Router } from "express";
import {
  createPostController,
  getAllPostController,
} from "../src/controllers/likemeController.js";

const rutas = Router();

rutas.get("/posts", getAllPostController);
rutas.post("/posts", createPostController);

export default rutas;
