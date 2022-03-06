const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    user: String,
    imageUrl: String,
    description: String,
});

module.exports = mongoose.model("Image", imageSchema);