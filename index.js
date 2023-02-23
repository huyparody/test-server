const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(`/`, require("./routes/InfoLinks"));
app.use(`/`, require("./routes/character/characterRoutes"));

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
