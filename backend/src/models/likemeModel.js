import pool from "../../db/config.js";

export const getAllPostsModel = async () => {
  const sqlQuery = "select * from posts";
  const response = await pool.query(sqlQuery);
  return response.rows;
};

export const createPostModel = async (titulo, img, descripcion) => {
  const sqlQuery = {
    text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
    values: [titulo, img, descripcion],
  };
  const result = await pool.query(sqlQuery);
  return result.rows;
};

export const deletePostModel = async (id) => {
  const sqlQuery = {
    text: "DELETE FROM posts WHERE id = $1 RETURNING *",
    values: [id],
  };
  const result = await pool.query(sqlQuery);
  return result.rows;
};

export const updatePostModel = async (id) => {
  const sqlQuery = {
    text: "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
    values: [id],
  };
  const result = await pool.query(sqlQuery);
  return result.rows;
};
