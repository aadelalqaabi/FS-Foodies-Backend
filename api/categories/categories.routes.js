const express = require("express");
const router = express.Router();

const {
  fetchCategory,
  categoryCreate,
  categoriesGet,
} = require("./categories.controllers");

router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchAuthor(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("Author Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/categories", categoryCreate);
router.get("/categories", categoriesGet);

module.exports = router;
