const express = require("express");
const app = express();

app.get("/digilocker/auth", (req, res) => {
  res.send("Backend working ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
