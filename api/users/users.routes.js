const express = require("express");
const passport = require("passport");
const router = express.Router();

const { signup, signin, getUsers, recipeAdd, fetchUser,  } = require("./users.controllers");

router.param("userId", async (req, res, next, userId) => {
  const user = await fetchUser(userId, next);
  if (user) {
    req.user = user;
    next();
  } else {
    const err = new Error("User Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

router.put("/:userId/recipes/:recipeId", recipeAdd);

module.exports = router;
