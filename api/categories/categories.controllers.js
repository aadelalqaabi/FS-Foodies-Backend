const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};

exports.recipesCreate = async (req, res, next) => {
  req.body.Category = req.category._id;
  try {
    if (req.file) {
      req.body.image = `media/${req.file.filename}`;
    }
    const newRecipe = await Recipe.create(req.body);
    await Category.findByIdAndUpdate(req.category._id, {
      $push: { recipes: newRecipe._id },
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `media/${req.file.filename}`;
    }
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.categoriesGet = async (req, res, next) => {
  try {
    const categories = await Category.find().populate("recipes");
    res.json(categories);
  } catch (error) {
    next(error);
  }
};
