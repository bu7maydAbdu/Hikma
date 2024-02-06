const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  reply: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

exports.module = mongoose.model("Reply", replySchema);
