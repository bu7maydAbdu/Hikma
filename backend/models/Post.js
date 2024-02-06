const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  imageFile: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
  },
});

module.exports = mongoose.model("Post", PostSchema);
