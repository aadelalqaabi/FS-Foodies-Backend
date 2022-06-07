const Category = require("../../models/Category");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
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
