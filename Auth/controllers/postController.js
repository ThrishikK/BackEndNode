import pool from "../db.js";

/**
 * Admin: Create Post
 */
export const createPost = async (req, res) => {
  const { title, content } = req.body;

  await pool.query(
    "INSERT INTO posts (title, content, created_by) VALUES (?, ?, ?)",
    [title, content, req.user.id]
  );

  res.status(201).json({ message: "Post created successfully" });
};

/**
 * Public (Logged-in): Get All Posts
 */
export const getAllPosts = async (req, res) => {
  const [posts] = await pool.query(`
    SELECT 
      posts.id,
      posts.title,
      posts.content,
      users.name AS author,
      posts.created_at
    FROM posts
    JOIN users ON posts.created_by = users.id
    ORDER BY posts.created_at DESC
  `);

  res.json(posts);
};

/**
 * Admin: Delete Post
 */
export const deletePost = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM posts WHERE id = ?", [id]);

  res.json({ message: "Post deleted" });
};
