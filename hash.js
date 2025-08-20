import bcrypt from "bcrypt";

const password = "5678"; // your plain password
const saltRounds = 10;   // cost factor, standard is 10

async function hashPassword() {
  const salt = await bcrypt.genSalt(saltRounds);       // generate a random salt
  const hashedPassword = await bcrypt.hash(password, salt); // hash the password
  console.log("Hashed password:", hashedPassword);
}

hashPassword();
