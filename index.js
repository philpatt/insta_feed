let express = require ('express');
let path = require('path');
let app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('layout');
});

app.listen(3000);