import { Router } from "express";
import {
  createPostController,
  getAllPostController,
  deletePostController,
  updatePostController,
} from "../src/controllers/likemeController.js";

const rutas = Router();

rutas.get("/posts", getAllPostController);
rutas.post("/posts", createPostController);
rutas.put("/posts/like/:id", updatePostController);
rutas.delete("/posts/:id", deletePostController);


export default rutas;
