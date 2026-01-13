const express = require("express");
const app = express();

/*
|--------------------------------------------------------------------------
| FAKE / DEMO DigiLocker AUTH ROUTE
|--------------------------------------------------------------------------
| Real DigiLocker tabhi kaam karta hai jab
| govt-approved client_id + whitelisted domain ho
| Isliye yaha DEMO success redirect kar rahe hain
*/

app.get("/digilocker/auth", (req, res) => {
  // yaha normally DigiLocker redirect hota
  // abhi DEMO ke liye direct success
  res.redirect(
    "https://YOUR-GITHUB-PAGE/index.html?dl=success"
  );
});

/*
|--------------------------------------------------------------------------
| DigiLocker CALLBACK (OPTIONAL)
|--------------------------------------------------------------------------
*/
app.get("/digilocker/callback", (req, res) => {
  // Normally yaha code verify hota
  res.redirect(
    "https://YOUR-GITHUB-PAGE/index.html?dl=success"
  );
});

/*
|--------------------------------------------------------------------------
| SERVER START
|--------------------------------------------------------------------------
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
