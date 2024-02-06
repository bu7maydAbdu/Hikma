const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postController = require("../controllers/postController");
const Post = require("../models/Post");

router.get("/", postController.getAllOrders);

router.post("/create", upload.single("file"), postController.postOrder);

module.exports = router;
