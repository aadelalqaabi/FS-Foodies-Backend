const User = require("../../models/User");
const Ingredient = require("../../models/Ingredient");

exports.getIngredients = async (req, res, next) => {
    try {
        const ingredient = await Ingredient.find();
        res.status(200).json(ingredient);
    } catch (error) {
        next(error);
    }
};

exports.fetchIngredient = async (ingredientId, next) => {
    try {
        const ingredient = await Ingredient.findById(ingredientId);
        return ingredient;
    } catch (error) {
        next(error);
    }
};
