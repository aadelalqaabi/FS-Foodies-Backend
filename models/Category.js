const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  image: String,
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

module.exports = mongoose.model("Category", CategorySchema);
