const express = require('express');
const app = express();

// --------------------
// Mongoose Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String
})

// --------------------
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
// const reviews = [
//     { title: 'Great movie', movieTitle: 'Batman II'},
//     { title: 'Awesome Movie', movieTitle: 'Titanic'},
// ]

// --------------------
// INDEX
app.get('/', (req, res) => {
    Review.find()
    .then(reviews => {
        res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
        console.log(err);
    })
})

// --------------------
// PORT
// --------------------

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})