let express = require ('express');
let path = require('path');
let app = express();
let ejsLayouts = require('express-ejs-layouts');



app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', function(req, res){
    res.render('home');
});


app.use('/insta-feed', require('./controllers/insta-feed'));


app.listen(3000);