var express = require('express');
var router = express.Router();

// passing Query String object
// localhost:3000/person?name=bongomin&age=20
router.get('/person' ,(req,res) => {
   if(req.query.name){
      res.status('200').send(`you have requested person ${req.query.name}`);
   }else{
      res.status('200').send(`this is the person end point`);
   }

});

// getting person by name / using parameter
// params object on a property
// localhost:3000/person/bongomin
router.get('/person/:name' ,(req,res) => {
   res.status('200').send(`this is the person end point ${req.params.name}`);
   });


module.exports = router;




