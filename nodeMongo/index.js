const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/myRandomDB", function (err, db) {
     if(err) throw err;   
  // Use this space to pass MongoDB CRUD code here             
});

app.listen(3000, () => {
    console.log('Connected to PORT 3000...');
})