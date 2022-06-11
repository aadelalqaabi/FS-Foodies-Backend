const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  slug: { type: String, slug: "name" }
});

module.exports = mongoose.model("User", UserSchema);
