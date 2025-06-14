import { getAllPostsModel, createPostModel } from "../models/likemeModel.js";

export const getAllPostController = async (req, res) => {
  try {
    const posts = await getAllPostsModel();
    res.json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPostController = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    const newTravel = await createPostModel(titulo, url, descripcion);
    res.json({ travel: newTravel });
  } catch (error) {
    res.json({ message: error.message });
  }
};
