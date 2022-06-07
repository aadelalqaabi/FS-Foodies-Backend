const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
