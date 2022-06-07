const express = require("express");
const passport = require("passport");
const router = express.Router();

const { fetchRecipes, createRecipes } = require("./recipes.controller");

router.get("/recipes", fetchRecipes);
router.post("/createRecipes", createRecipes);

module.exports = router;
