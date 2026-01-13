const express = require("express");
const app = express();

app.get("/digilocker/auth", (req, res) => {

  const authUrl =
    "https://digilocker.gov.in/public/oauth2/1/authorize" +
    "?response_type=code" +
    "&client_id=YOUR_CLIENT_ID" +
    "&redirect_uri=https://your-backend.com/digilocker/callback" +
    "&scope=openid profile" +
    "&state=xyz123";

  res.redirect(authUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});


