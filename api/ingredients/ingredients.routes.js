const express = require("express");
const router = express.Router();

const { getIngredients } = require("./ingredients.controllers");

router.get('/ingredient', getIngredients);

module.exports = router;
