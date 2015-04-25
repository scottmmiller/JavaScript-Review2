//Create a Animal Constructor that has the following parameters: species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters: name, age, height, gender

  //code here
var person = function(name, age, height, gender) {
  var object = {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
  return object;
};

//Create a animal array and a person array.

  //code here
var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array

  //code here
var spider = new Animal('arachnid', 'tarantula', 8, 'black', ['flies', 'crickets', 'spiders']);
var horse = new Animal('equine', 'quarter', 4, 'brown', ['hay', 'oats']);

//Create two instances of person and push those into your person array.

  //code here
var me = person('Skoot', 37, '6\'' ,'male');
var huds = person('Hudson', 1, '2\'', 'male');

//Now we want every instance of Animal to have an eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  var randomNumber = Math.floor(Math.random() * (this.food.length - 0) + 0);
  var foodEaten = this.food[randomNumber];
  alert(this.name + " ate " + foodEaten);
};

//At this point, if we wanted to add something to every instance of person could we? 

  //Yes or no? and why or why not?
No. The instances of person do not have access to any prototype, because they were not constructed using a constructor or the 'new' keyword.  They have no 'backpack' to dig into.  Each of their properties have to be changed manually at this point.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    create.Object(Constructor.prototype) is automatically called, giving that object access to the prototype.
    Every this. statement is returned automatically as well, passing the keys and values to the object that was declared outside the constructor.
  2) What's a good way to describe the keyword 'this'?
    A placeholder!  Whatever is to the left of the dot at call time takes the place of this within the function.
    this.method() = function() {....}
    me.method();
    This will call the function in the prototype, for the me object.
  3) Can a normal function which creates an object and then returns that object use the prototype?
    No.
  4) What happens if you forget to use 'new' when calling a constructor?
    From my experience, it log 'undefined'.  If it happens to work, though, I'm sure the properties would not be applied to the object, and it certainly wouldn't have access to any of the prototype properties or methods.
*/