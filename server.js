// npm
var express = require('express');
var app = express();

// Configuration
app.configure(function(){
  app.set('title', 'Limin Shen');
  // app.set('views', __dirname + '/server/views');
  // app.set('view engine', 'jade');
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

// setup server routes
// var routes = require('./server/routes');
// app.use(routes);


// session support
app.use(express.cookieParser());
app.use(express.session({ secret: "mathday" }));


app.configure('development', function(){
    app.use(express.static(__dirname + '/public')); //dir of the currently executing script.
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


// app.get('/', routes.index);


app.listen(1234);

console.log('Server running @ http://127.0.0.1:1234');


