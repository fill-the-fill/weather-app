
const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);
const api = require("./server/routes/api");
const app = express();
app.use("/", api);


app.use(express.static(path.join(__dirname, `dist`)));
app.use(express.static(path.join(__dirname, `node_modules`)));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);




const port = 3333;
app.listen(port, function() {
  console.log(`3333 is feeling good today`);
});



