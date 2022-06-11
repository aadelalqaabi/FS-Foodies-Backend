const Recipe = require("../../models/Recipe");
const Category = require("../../models/Category");
const Ingredient = require("../../models/Ingredient");

exports.fetchRecipes = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};

exports.getRecipes = async (req, res, next) => {
  try {
    const recipe = await Recipe.find().populate("ingredients");
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
      const newIngredient = await Ingredient.create(req.body);
      res.status(201).json(newIngredient);
  } catch (error) {
      next(error);
  }
};

  exports.ingredientAdd = async (req, res, next) => {
    const { ingredientId } = req.params;

    try {
      await Recipe.findByIdAndUpdate(req.recipe._id, {
          $push: { ingredients: ingredientId }, 
      });

      res.status(201).end();
    } catch (error) {
      next(error);
    }
  };

  exports.recipeUpdate = async (req, res, next) => {
    try {
      await Recipe.findByIdAndUpdate(req.recipe._id, req.body);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
  