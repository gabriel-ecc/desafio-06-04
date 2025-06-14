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
