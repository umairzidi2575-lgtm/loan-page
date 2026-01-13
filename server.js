const express = require("express");
const app = express();

app.get("/digilocker/auth", (req, res) => {
  res.send("DigiLocker auth route working ✅");
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
