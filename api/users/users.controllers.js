const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../../config/keys");

exports.signin = async (req, res, next) => { // add foodiez modal later !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  try {
    const { user } = req;
    const payload = {
      id: user.id,
      username: user.username,
      recipes: user.recipes,
      exp: Date.now() + JWT_EXPIRATION_MS,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    recipes: user.recipes,
    exp: Date.now() + JWT_EXPIRATION_MS,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    const token = generateToken(newUser);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};



exports.recipeAdd = async (req, res, next) => {
  const { recipeId } = req.params; 

  try {
    await User.findByIdAndUpdate(req.user._id, {
        $push: { recipes: recipeId }, 
    });

    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

exports.fetchUser = async (userId, next) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    next(error);
  }
};

