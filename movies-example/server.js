const express = require("express");
const hbs = require("hbs");
const moviesJson = require("./movies.json");

const app = express();

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) =>
  res.render("index", {
    movies: moviesJson,
    isArrayOfMovies: "Of course it is",
    isStudent: false,
    hobbies: [],
  })
);

app.listen(3001, () => console.log(`LISTENING ON PORT 3001`));
