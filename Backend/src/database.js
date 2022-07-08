const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:3303/employees-db")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Error connecting to MongoDB...", err));

  