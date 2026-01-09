import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // req.userId = decoded.id;
    req.user = decoded; // { id, role }
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
