const express = require("express");
const router = express.Router();

const { createIngredient, getIngredients } = require("./ingredients.controllers");

router.get('/users/ingredient', getIngredients);
router.post('/users/ingredient', createIngredient);

module.exports = router;


// router.post(
//     "/signin",
//     passport.authenticate("local", { session: false }),
//     signin
//   );