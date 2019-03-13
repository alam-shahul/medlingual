var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/profile', function(request, response) {
  response.render('profile');
});

app.get('/about', function(request, response) {
  response.render('about');
});

app.get('/whoweare', function(request, response) {
  response.render('whoweare');
});

app.get('/projects', function(request, response) {
  response.render('projects');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
