const express = require("express");
const app = express();

app.get("/digilocker/callback", (req, res) => {
  // OTP ke baad DigiLocker yahin aata hai
  res.redirect("https://umairzidi2575-lgtm.github.io/loan-page/");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

