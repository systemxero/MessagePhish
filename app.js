
/**
 * Module dependencies.
 */

var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');
var favicon        = require('serve-favicon');
var errorhandler   = require('errorhandler');
var colors         = require('colors');
var handlebars     = require('express3-handlebars').create({defaultLayout:'main'});
var routes         = require('./routes');

var about          = routes.about;
var user           = routes.user;

app = express();

app.use(express.static(__dirname, '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
console.log('hi'.rainbow);
app.set('port', process.env.PORT || 9000);
app.engine('handlebars',handlebars.engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(favicon(__dirname+'/app/favicon.ico'));


if ( process.env.NODE_ENV === 'development' ) {
  app.use(errorhandler());
}

var ndxRouter = express.Router();
ndxRouter.get('/', routes.index);
ndxRouter.get('/about', routes.about);
ndxRouter.get('/users', routes.user);
app.use('/',ndxRouter);

// handle the 404
app.use(function(req, res, next) {
  res.type('text/html');
  res.status(404)
  res.send('/app/404.html');

})

//app.get('/', routes.index);
//app.get('/users', user.list);

app.listen(app.get('port'));
console.log("Express server listening on port ".blue + app.get('port'));
