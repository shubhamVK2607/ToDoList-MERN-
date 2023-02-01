const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();

const date = new Date();
var items=["Buy Food","Cook Food", "Eat Food"]

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};



const newDate=date.toLocaleDateString('en-us',options)

app.set("view engine", "ejs");

app.get("/", (req, res) => {

  res.render("list", { Date: newDate,newListItems:items });
});

app.post("/",(req,res)=>{
    var item=req.body.todo
    items.push(item)
    res.redirect("/")
})

app.listen(3000, () => {
  console.log("Our Server is started at Port 3000");
});
