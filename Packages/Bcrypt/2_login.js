import bcrypt from "bcrypt";

const enteredPassword = "Deoxyribonucleic_Acid";
const storedHash =
  "$2b$10$cYqSj7.e0WiJahztsXvqse/d.u7jwqzn2YOot9u.7Xfj8txasty5W";

storedHash = storedHash.trim();

const checkPassword = async (enteredPassword, storedHash) => {
  const isMatch = await bcrypt.compare(enteredPassword, storedHash);
  console.log(isMatch);

  if (isMatch) {
    console.log("Login successful");
  } else {
    console.log("Invalid password");
  }
};

checkPassword(enteredPassword, storedHash);
