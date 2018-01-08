const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set('port', process.env.PORT || 3003);

app.get("/", (req, res) => {
res.render("landing")

})


app.get("/attractions", (req, res) => {
   
    })








app.listen(app.get('port'), () => {
  console.log('The Visit Dc server is running at port 3003 .......')
})