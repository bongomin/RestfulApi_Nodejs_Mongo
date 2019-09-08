var express = require('express');
// loading Router
var personRouter = require('./routes/person');

// initailising the express application
var app = express();

// using the Routes
app.use(personRouter);


// middleware for setting static files
app.use(express.static('public'));








const PORT =process.env.PORT || 3000;
app.listen(PORT,() =>{
   console.info(`The server is running on PORT: ${PORT}`)

})

