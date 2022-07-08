//express required for server
const express = require("express");

//cors required for cross origin resource sharing
const cors = require("cors");

// morgan require
const morgan = require("morgan");

//employees.routes require
const employeesRoutes = require("./routes/employees.routes");

const app = express();
//defined port 3000 or can be defined in environment variable
const port = process.env.PORT || 3000;

app.set("port", port);
app.use(cors(origin="http://localhost:4200"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", employeesRoutes);

module.exports = app;
