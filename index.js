let express = require ('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'views')));


app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(3000);