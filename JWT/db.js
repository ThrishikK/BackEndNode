import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Thrishik25@sql",
  database: "jwt_auth",
});

export default pool;
