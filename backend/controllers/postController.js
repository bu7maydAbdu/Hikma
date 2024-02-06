const cloudinary = require("../middleware/cloudinary");
const express = require("express");
const Post = require("../models/Post");
const Reply = require("../models/Reply");
module.exports = {
  postOrder: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      await Post.create({
        caption: req.body.caption,
        imageFile: result.secure_url,
        cloudinaryId: result.public_id,
      });

      res.redirect("/");
      location.reload();
    } catch (error) {
      console.error(error);
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const allPosts = await Post.find();
      res.send(allPosts);
    } catch (err) {
      console.error(err);
    }
  },
};
