import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Check existing user
  const [existing] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (existing.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Save user
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  // Create JWT
  const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Send cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(201).json({ message: "Signup successful" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (users.length === 0) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const user = users[0];

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ message: "Login successful" });
};

export const profile = (req, res) => {
  res.json({
    message: "Access granted",
    userId: req.userId,
  });
};

export const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ message: "Logged out" });
};
