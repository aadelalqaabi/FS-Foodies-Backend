const Recipe = require("../../models/Recipe");
const Category = require("../../models/Category")


exports.fetchRecipes = async (req,res, next) => {
    try {
        console.log("fetchinng")
      const recipe = await Recipe.find();
    res.json(recipe)
    } catch (error) {
      next(error);
    }
  };
  exports.createRecipes = async (req, res, next) => {
    try {
        console.log("Create")
      const newRecipe = await Recipe.create(req.body);
      res.status(201).json(newRecipe);
    } catch (error) {
      next(error);
    }
  };

//   exports.createRecipes = async (req, res, next) => {
//       console.log("create")
//     req.body.recipeId = req.recipe._id;
//     try {
//       const newRecipe = await Recipe.create(req.body);
//       await Category.findByIdAndUpdate(req.recipe._id, {
//         $push: { recipes: newRecipe._id },
//       });
//       res.status(201).json(newRecipe);
//     } catch (error) {
//       next(error);
//     }
//   };
//   exports.tagAdd = async (req, res, next) => {
//     try {
//       const { tagId } = req.params;
//       await Post.findByIdAndUpdate(req.post._id, {
//         $push: { tags: tagId },
//       });
//       await Tag.findByIdAndUpdate(tagId, {
//         $push: { posts: req.post._id },
//       });
  
//       res.status(204).end();
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   exports.postsDelete = async (req, res, next) => {
//     try {
//       await Post.findByIdAndRemove({ _id: req.post.id });
//       res.status(204).end();
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   exports.postsUpdate = async (req, res, next) => {
//     try {
//       await Post.findByIdAndUpdate(req.post.id, req.body);
//       res.status(204).end();
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   exports.postsGet = async (req, res, next) => {
//     try {
//       const posts = await Post.find({}, "-createdAt -updatedAt")
//         .populate("authorId", "name")
//         .populate("tags", "name");
//       res.json(posts);
//     } catch (error) {
//       next(error);
//     }
//   };
