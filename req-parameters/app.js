const express = require("express");

const app = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});
//ignored

app.get("/sophie", (req, res) => {
  console.log(req.params, req.query);
  //   http://localhost:3000/sophie?game=red-dead&company=rockstar
  // this goes to /sophie
  // variable game in req.query and assigns the value red-read
  // variable company in req.query and assigns the value rockstar
  console.log("THIS IS A SUPER IMPORTANT ROUTE");
  res.render("hello", { user: { name: "sophie" } });
});

app.get("/products", (req, res) => {
  console.log(req.query);
  //makes request to our database of products to find everything that is here
  //   if it finds, we send the product
  // if it doesnt find ,return null
  /* 
  {{#if product}}
  show product info
  {{else}}
  Sorry, no product wans found with these specifications
  {{/if}}
  */
});

app.get("/:name", (req, res) => {
  console.log(req.params);
  res.render("hello", { user: { name: req.params.name } });
});

app.get("/:ber/:lis", (req, res) => {
  console.log(req.params);
});

app.listen(3000, () => {
  console.log("EVERY DAY IM LISTENING LISTENING, 3000");
});

// above that has same amount of slashes as 👇, bue has something defined, this one takes precedent

app.get("/:means/:airport/:from/:to/:dayFrom/:dayTo", (req, res) => {
  console.log("req:", req.params);
});

// below the ☝️ and has something defined, the above wins, because its written before

// breadwith-introduce-dutch-word.com/episodes/:episodeNumber
// { means: "transport", airport: "fluge", from:"ber", to:"lis", dayFrom:"201116", dayTo:201123 }
// {adults: 1, adultsv2: 1, cabinclass: economy}
// https://www.skyscanner.de/transport/fluge/ber/lis/201116/201123/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27544072&inboundaltsenabled=false&infants=0&originentityid=27547053&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1

// https://www.google.com/search?sxsrf=ALeKk01Ztn3kyk_BmzZf9KNQ4XWqYBassA%3A1605108854329&source=hp&ei=dgSsX96BEcKWad2YkugE&iflsig=AINFCbYAAAAAX6wShljOVO2k-YTPNx-SrSXtlEIJ779D&q=adele+hello&oq=adele+hello&gs_lcp=CgZwc3ktYWIQAzIICC4QyQMQkwIyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECc6BAgAEEM6BwgAEMkDEEM6CgguEMcBEKMCEEM6AgguOgQILhBDOggILhDHARCjAjoKCC4QyQMQQxCTAlCuC1jeFGCTFmgBcAB4AYAB7QKIAdoOkgEHMC41LjMuMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=psy-ab&ved=0ahUKEwjelNe46PrsAhVCSxoKHV2MBE0Q4dUDCAg&uact=5
// app.get("/search?lkfdjghfgjkhdfjkhfgdkjljhoigduijt")

// app.get("/transport/fluge/ber/lis/201116/201123/")
