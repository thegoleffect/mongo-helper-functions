// Lib functions TODO: factor out
// From: http://parentnode.org/javascript/default-arguments-in-javascript-functions/
Function.prototype.defaults = function(){
  var _f = this;
  var _a = Array(_f.length-arguments.length).concat(
    Array.prototype.slice.apply(arguments));
  return function(){
    return _f.apply(_f, Array.prototype.slice.apply(arguments).concat(
      _a.slice(arguments.length, _a.length)));
  }
}

// I don't remember where I got this, if you recognize this please let me know so I can give credit where its due.  Thank you.
function zeroFill(number, width){
  width -= number.toString().length;
  if ( width > 0 ){
    return number + new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' );
  }
  return number;
}

if (typeof ObjectID == "undefined"){
  var ObjectID = function(x){
    return "ObjectID(\"" + x + "\")"
  }
}



// ** CODE STARTS HERE **  
// TODO: 
var MongoDate = function(date, tz_offset){
  this.date = date || null;
  this.ObjectID = null;
  this.tz_offset = tz_offset || 0;
}

MongoDate.prototype.toObjectID = function(){
  if (this.date == null){ this.today(); }
  this.ObjectID = ObjectID(zeroFill((this.date.getTime()/1000).toString(16), 24));
  return this.ObjectID;
}

MongoDate.prototype.today = function(){
  var now = new Date();
  var year = now.getFullYear(),
      date = now.getDate(),
      month = now.getMonth();
      
  var tz_date = new Date(year, month, date);
  tz_date.setHours(tz_date.getHours() - this.tz_offset);
  
  this.date = tz_date;
  return this;
}

MongoDate.prototype.days_ago = function(days){
  this.today()
  days = days || 0;
  var result = new Date(this.date.getTime() - (days * 86400000));
  this.date = result;
  return this;
}

exports.MongoDate = MongoDate