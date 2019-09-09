var express = require('express');
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
   name : String,
   email:{
      type : String,
      required : true,
      unique : true
   }

});
mongoose.model('customers', customerSchema);
// module.exports = mongoose.module('customer',customerSchema);