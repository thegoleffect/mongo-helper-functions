var sys = require('sys')

function Gadget(name, color){
  this.name = name;
  this.color = color;
  this.someMethod = function(){ return 1; }
}
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;

var newtoy = new Gadget('webcam', 'black')

sys.log(sys.inspect(newtoy));



function Foo(){
  this.x = 1;
}
Foo.prototype.AddX = function(y){
  this.x += y;
}

obj = new Foo;
obj.AddX(5)
sys.log(sys.inspect(obj))