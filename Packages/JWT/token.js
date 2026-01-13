import jwt from "jsonwebtoken";

const SECRET_KEY = "mySuperSecretKey";
const user = {
  id: 101,
  username: "thrishik",
  role: "user",
};


const token = jwt.sign(
  user,           // payload (data inside token)
  SECRET_KEY,     // secret key
  { expiresIn: "1h" } // token expiry
);

console.log("JWT Token:\n", token);

try {
  const verifiedData = jwt.verify(token, SECRET_KEY);
  console.log("\nVerified Data:\n", verifiedData);
} catch (error) {
  console.log("\nInvalid or Expired Token");
}

const decodedData = jwt.decode(token);
console.log("\nDecoded Data (No Verification):\n", decodedData);

try {
  jwt.verify(token, "wrongSecret");
} catch (error) {
  console.log("\nVerification failed due to wrong secret");
}
