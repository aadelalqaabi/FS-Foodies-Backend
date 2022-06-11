const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const IngredientSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, slug: "name" }
});

module.exports = mongoose.model("Ingredient", IngredientSchema);

    // mongoose.plugin(slug)
