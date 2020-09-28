const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const db = require("./config/db/index.js");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const routes = require("./routes/routes.js");

//connect db
db.connect();

//get parameters method form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file
app.use(express.static(path.join(__dirname, "public")));

//morgan
app.use(morgan("combined"));

//handlebars
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routes
routes(app);

app.listen(port, () => {
  console.log(`Nhấn vào http://localhost:${port}`);
});
