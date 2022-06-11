const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const RecipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  instructions: String,
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  slug: { type: String, slug: "name" }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
