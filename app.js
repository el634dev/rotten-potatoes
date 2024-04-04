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

// Mock array of movies
let reviews = [
    { title: 'Great movie', movieTitle: 'Batman II'},
    { title: 'Awesome Movie', movieTitle: 'Titanic'},
]

// --------------------
// INDEX
app.get('/', (req, res) => {
    res.render('reviews-index', { reviews: reviews })
})

// --------------------
// PORT
// --------------------

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})