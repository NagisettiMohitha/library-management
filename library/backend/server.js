const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const issueRoutes = require("./routes/issueRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
dotenv.config();//it is used to load the .env content

connectDB();

const app = express();//runs the express server

app.use(cors());//nodes are not blocked

app.use(express.json());//
app.use("/api/books", bookRoutes);
app.use(cors());
app.use("/api/dashboard",dashboardRoutes);
app.use("/api/students", studentRoutes);
app.use(express.json());
app.use("/api/issues", issueRoutes);
app.use("/api/books", bookRoutes);
app.get("/", (req, res) => {
    res.send("Library Management API Running...");
});

const PORT = process.env.PORT || 5000;  ///port should to run in 5000

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});