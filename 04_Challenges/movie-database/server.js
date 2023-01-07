const express        = require('express');const MongoClient    = require('mongodb').MongoClient;const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;
app.listen(port, () => {  console.log('We are live on ' + port);});
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
  });
  app.post("/addname", (req, res) => {
 
  });
  
  app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });  
  app.post("/username", (req, res) => {
 
  });
  app.post("/username", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });  
  app.post("/password", (req, res) => {
 
  });
  app.post("/password", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });  