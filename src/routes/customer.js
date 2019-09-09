var customerModel = require('../model/customer.model');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

require('../model/customer.model');
var customerModel = mongoose.model('customers');


// post Enpoint for creating new customer
// POST localhost:3000/customer

router.post('/customer' ,(req,res) => {
  if(!req.body){
     return res.status(400).send('there is a problem');
  }
  let model = new customerModel(req.body)
  model.save()
  .then(doc => {
     if(!doc || doc.length === 0){
        return res.status(500).send(doc);
     }
     res.status(201).send(doc);
  })
  .catch(err => {
     res.status(500).json(err);
  })
})


// Get Request for Fetching customer from database
router.get('/customer', (req,res) => {
   if(!req.query.email){
      res.status(400).send('Missing Url email paramater')
   }
   customerModel.findOne({
      email :req.query.email
   })
   .then(doc => {
      res.status(201).json(doc)

   })
   .catch(err => {
      res.status().json(err)
   })

})

// Update Request
router.put('/customer' ,(req,res) => {
   if(!req.query.email){
      return res.status(400).send('Missing URL parameter: Email')
   }
   customerModel.findOneAndUpdate({
      email : req.query.email
   }, req.body.email ,{
      new: true
   })
   .then( doc => {
      res.status(201).json(doc)
   } )
   .catch(err => {
      res.status(500).json(err)
   })
} )

// Delete Request
router.delete('/customer', (req,res) => {
   if(!req.email){
      return res.status(400).send('Missing Url Paramater : Email')
   }
   customerModel.findAndRemove({
      email : req.query.email
   })
   .then(doc=> {
      res.status(200).json(doc)
   } )
   .catch(err => {
      res.status.json(err)
   })
})

module.exports = router;




