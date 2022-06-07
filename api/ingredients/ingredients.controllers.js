const User = require("../../models/User");
const Ingredient = require("../../models/Ingredient");

exports.createIngredient = async (req, res, next) => {
    try {
        const newIngredient = await Ingredient.create(req.body);
        res.status(201).json(newIngredient);
    } catch (error) {
        next(error);
    }
};

exports.getIngredients = async (req, res, next) => {
    try {
        const ingredient = await Ingredient.find();
        res.status(200).json(ingredient);
    } catch (error) {
        next(error);
    }
};
