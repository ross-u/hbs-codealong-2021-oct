const express = require("express");

const app = express();

// SETUP VIEW ENGINE
app.set("view engine", "hbs");

// SETUP THE FOLDER WITH TEMPLATES
app.set("views", __dirname + "/views");

// MIDDLEWARE
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
