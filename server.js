console.log("server file is runinng");

// let add = function(a,b){
//     return a + b;
// }

let add = (a, b) => a + b;

let result = add(20, 7);
console.log(result);

(function () {
  console.log("Ranjith is called");
})();

function callback() {
  console.log("addding is successfully completed");
}

const adds = function (a, b, callback) {
  let r = a + b;
  console.log("result: ", r);
  callback();
};

adds(3, 6, callback);

let fs = require("fs");

let os = require("os");

let _ = require("loadsh");

let user = os.userInfo();

console.log(user.username);

fs.appendFile("greeting.txt", "Hello " + user.username + " !\n", () => {
  console.log("file is created");
});

let data = ["person", "person", 1, 2, 3, 2, 1, "name", "age", "2"]

let filter = _.uniq(data);

console.log(filter);

console.log(_.isArray(data));

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/items", function (req, res) {
  res.send("data is saved");
});

// database file importing
const db = require("./db");


const bodyParser = require("body-parser");
app.use(bodyParser.json());


require('dotenv').config();

const PORT = process.env.PORT || 3008
// import the router  files

const personRoutes = require('./routers/personRouters');

const MenuItems = require('./routers/Menuroutes')


app.use('/person',personRoutes);

app.use('/menu', MenuItems);



app.listen(PORT, () => {
  console.log(`listening on port ${3006}`);
});
