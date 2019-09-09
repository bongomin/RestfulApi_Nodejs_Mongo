var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var customerRouter = require('./routes/customer')
var bodyParser = require('body-parser');
var db = require('../config/database')



// initailising the express application
var app = express();




// map global promisies / get reed of worning
mongoose.Promise = global.Promise;
// connection to mongoose
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// bodyParser middleware for passing json

app.use(bodyParser.json());
// loading Router
var personRouter = require('./routes/person');

app.use((req,res,next) => {
   console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);

   next();
})

// using the Routes
app.use(personRouter);
app.use(customerRouter);
// middleware for setting static files
app.use(express.static('public'));

// 404 middleware handler / page not found
app.use((req,res,next) => {
   res.status(400).send('page is not found please...')
});


// error handler 500 error occured
app.use((err,req,res,next) => {
   console.error(err.stack);
   res.sendFile(path.join(__dirname, '../public/500.html'));
})







const PORT =process.env.PORT || 3000;
app.listen(PORT,() =>{
   console.info(`The server is running on PORT: ${PORT}`)

})

