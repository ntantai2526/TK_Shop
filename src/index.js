const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const path = require("path");
const db = require('./config/db')

//connect DB
db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


// Route init khởi tạo tuyến đường

route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});