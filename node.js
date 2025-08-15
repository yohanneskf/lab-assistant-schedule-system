const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: "user-id-from-db",
    email: "admin@lab.edu",
    role: "ADMIN"
  },
  "supersecretkey", // your JWT_SECRET from .env
  { expiresIn: "1h" }
);

console.log(token);
