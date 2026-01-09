import bcrypt from "bcrypt";

const password = "Deoxyribonucleic_Acid.";

const hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword);
