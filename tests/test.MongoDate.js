// Temporary tests, more xUnit tests incoming

var sys = require('sys')
var MongoDate = require("../src/MongoDate/MongoDate").MongoDate

var t = new MongoDate;

console.log(t.today().toObjectID())
console.log(t.days_ago(2).toObjectID())
console.log(t.days_ago(3).toObjectID())