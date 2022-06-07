const connectDb = require("./database");
const express = require("express");
const app = express();
const userRoutes = require("./api/users/users.routes");
const categoriesRoutes = require("./api/categories/categories.routes");
const passport = require("passport");
const cors = require("cors");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

connectDb();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(userRoutes);
app.use(categoriesRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

app.listen(8001, () => {
  console.log("The application is running on localhost:8001");
});
