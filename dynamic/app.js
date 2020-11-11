const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

const user = {
  name: "Milena",
  in: "Ireland",
  from: "Colombia",
};

app.get("/", (req, res) => {
  //   res.send(`<h1>Hi everybody</h1>`);
  //   hey Usern name, how is User. from, and how nlong has it been since you visited  user.from
  res.render("index", { user });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
