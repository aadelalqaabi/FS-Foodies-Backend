const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Recipe", RecipeSchema);
