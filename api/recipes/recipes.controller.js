const Recipe = require("../../models/Recipe");
const Category = require("../../models/Category");

exports.fetchRecipes = async (req, res, next) => {
  try {
    const recipe = await Recipe.find();
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};
exports.createRecipes = async (req, res, next) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
