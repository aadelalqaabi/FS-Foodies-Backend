const express = require("express");
const passport = require("passport");
const router = express.Router();

const { fetchRecipes, getRecipes, ingredientAdd, recipeUpdate, createIngredient } = require("./recipes.controller");

router.param("recipeId", async (req, res, next, recipeId) => {
    const recipe = await fetchRecipes(recipeId, next);
    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      const err = new Error("Recipe Not Found");
      err.status = 404;
      next(err);
    }
});

router.post("/recipes/ingredient", createIngredient);
router.put("/:recipeId/ingredients/:ingredientId", ingredientAdd);
router.get("/recipes", getRecipes);
router.put("/:recipeId", recipeUpdate);


module.exports = router;
