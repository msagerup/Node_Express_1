var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// Routes to main page
app.get('/', function(req, res){
    res.render('default', {
        title: 'Home',
        users: ['Tore', 'Anne', 'Eimaer']
    });
});
// Shows new route (new page) (ie. http://www.homepage.com/me)
app.get('/me', function(req, res){
    res.send('<h2>My page</h2>');
});
// Shows new route(new page) but with dynamic respsive respond.
// ie. http://www.homepage.com/who/Anders 
// Outputs -> Anders was here
app.get('/who/:name?', function(req, res){
    var name = req.params.name;
    res.send(name + ' ' + 'was here');
});

// Same as above but adds another route
//i.e. http://www.homepage.com/who/Anders/theBoss (can be what ever you want)
// will display -> name: Anders 
//                 title: theBoss was here
app.get('/who/:name?/:title?', function(req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>name: ' + name + '<br>title: ' + title + ' was here' + '</p>');
});

var server = app.listen(3000, function() {
    console.log('Server is running at port 3000');
});