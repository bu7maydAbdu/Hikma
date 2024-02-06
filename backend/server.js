const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const session = require("express-session");
const MongoStore = require("connect-mongo");
const multer = require("multer");

const logger = require("morgan");
require("dotenv").config({ path: "./config/.env" });
const mainRoutes = require("./router/mainRoutes");
const postRoutes = require("./router/postRoutes");

const connectDB = require("./config/database");

const app = express();
connectDB();

// Use the cors middleware
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);
app.use("/", mainRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
