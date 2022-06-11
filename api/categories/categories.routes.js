const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

const {
  fetchCategory,
  categoryCreate,
  categoriesGet,
  recipesCreate,
} = require("./categories.controllers");

router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchCategory(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("Category Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/:categoryId/recipes", upload.single('image'), recipesCreate);
router.post("/categories", categoryCreate);
router.get("/categories", categoriesGet);

module.exports = router;
