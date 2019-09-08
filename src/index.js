var express = require('express');

// initailising the express application
var app = express();

// middleware for setting static files
app.use(express.static('public'));








const PORT =process.env.PORT || 3000;
app.listen(PORT,() =>{
   console.info(`The server is running on PORT: ${PORT}`)

})

