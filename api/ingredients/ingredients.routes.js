const express = require("express");
const router = express.Router();

const { getIngredients } = require("./ingredients.controllers");

router.get('/users/ingredient', getIngredients);


module.exports = router;