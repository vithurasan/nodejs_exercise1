//1st // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
         //Create a database named "mydb":
       var url = "mongodb://localhost:27017/mydb";

      MongoClient.connect(url, function(err, db) {
      if (err) throw err;
     console.log("Database created!");
      db.close();
    });*/


//2nd // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.createCollection("songdetails", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/


//3rd // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
	{
	Songname : "Thaniye Thananthaniye",flim: "Rhythm",Musicdirector: "A.R.Rahman",Singer: "Shankar mahadevan"
  },
  {
	Songname: "Evano oruvan",flim: "Alai payuthe",Musicdirector: "A.R.Rahman",Singer: "Swarnalatha"
  },
  {
	Songname: "Roja poonthooddam",flim: "Kannukkul nilavu",Musicdirector : "Ilaiyaraja",Singer: "unnikrishnan,Anuradha Sriram"
  },
  {
	Songname : "Vennilave venilave vinnaithaandi",flim: "Minsarak kanavu",Musicdirector: "A.R.Rahman",Singer: "Hariharan,Sadhana Sargam"
  },
  {
	Songname : "Sollamal thottu chellum thendral",film: "Dheena", Musicdirector: "Yuvan Shankar Raja",Singer: "Hariharan"
  }
  ];


  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
	if (err) throw err;
	console.log("Number of documents inserted: " + res.insertedCount);
	db.close();
  });
});*/


//4th // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}).toArray(function(err, result) {
	if (err) throw err;
	console.log(result);
	db.close();
  });
});*/


//5th // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeMusic");
  //Find all documents in the customers collection:
  dbo.collection("NodeDetails").find({MusicDirector : "A.R.Rahman"}).toArray(function(err, result) {
	if (err) throw err;
	console.log(result);
	db.close();
  });
});*/


//6th // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var query = { Musicdirector: "Ilaiyaraja", Singer: "unnikrishnan,Anuradha Sriram" };
  dbo.collection("songdetails").find(query).toArray(function(err, result) {
	if (err) throw err;
	console.log(result);
	db.close();
  });
});*/


//7th // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myquery = { Songname: "Roja poonthooddam"};
  dbo.collection("songdetails").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});*/


//8th // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = { Songname: "kannala kane", flim: "visuvasam", Musicdirector: "Ilaiyaraja", Singer: "Hariharan"};
  dbo.collection("songdetails").insertOne(myobj, function(err, res) {
	if (err) throw err;
	console.log("1 document inserted");
	db.close();
  });
});*/


//9th // QUESTION:
/*var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");

  var query = {flim: "Minsarak kanavu",Singer: "Hariharan" };
  dbo.collection("songdetails").find(query).toArray(function(err, result) {
	if (err) throw err;
	console.log(result);
	db.close();
  });
});*/


//10 // QUESTION:
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}, { _id:0,Singer:1,Songname:0, film:0,Musicdirector:0 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/
