const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const CategorySchema = new mongoose.Schema({
  name: String,
  image: String,
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  slug: { type: String, slug: "name" }
});

module.exports = mongoose.model("Category", CategorySchema);
