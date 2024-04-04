const express = require('express');
const app = express();

// App Setup
const exhbs = require('express-handlebars');
const Handlebars = require('handlebars');

// --------------------
// Use 'main' as our default layout
app.engine('handlebars', exhbs.engine({ 
    defaultLayout: 'main' }
));

// --------------------
// Use handlebars to render
app.set('view engine', 'handlebars');

// --------------------
// ROUTES
// --------------------

app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are coool!' });
})

// --------------------
// PORT
// --------------------

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})