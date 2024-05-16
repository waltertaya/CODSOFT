const express = require('express');  // Used express js
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes/routes');  // Express routes
require('dotenv').config();

const app = express();

app.use(bodyParser.json());  // Allow to parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ // Storing session data (user data)
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');  // Set views to ejs
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
