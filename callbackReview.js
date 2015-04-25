/* Declare and Define the functions here that will make the function calls below work properly */
//**My code**
var first = function(array, callback) {
  callback(array[0]);
};
//**Pre-prop..ed code**
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//**My code**
var last = function(array, callback) {
  callback(array[array.length - 1]);
};

//**Pre-prop..ed code**
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the "contains" function return a boolean value for if the name is in the array or not.
//**My code**
var contains = function(string, array, callback) {
  var answer = false;
  if(array.indexOf(string) !== -1) {
    answer = true;
  };
  callback(answer);
};

//**Pre-prop..ed code**
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});
***** OR *****  //'name' parameter for multi-use function
var contains = function (name, arr, callback) {
  var answer = false;
  if (arr.indexOf(name) !== -1) {
    answer = true;
  };
  callback(name, answer);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(name, yes){
  if(yes){
    console.log(name + ' is in the array');
  } else {
    console.log(name + ' is not in the list');
  };
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//**My code**
var map = function(array, callback) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  };
  return newArray;
};
//**Pre-prop..ed code**
var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//**My code**
var uniq = function(array, callback) {
  var uniqArr = [];
  for(var i = 0; i < array.length; i++) {
    if(uniqArr.indexOf(array[i]) === -1) {
      uniqArr.push(array[i]);
    }
  };
  callback(uniqArr);
};
//**Pre-prop..ed code**
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//**My code**
var each = function(array, callback) {
  for(var i = 0; i < array.length; i++) {
    item = array[i];
    indice = i;
    callback(item, indice);
  };
};
//**Pre-prop..ed code**
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//**My code**
var getUserById = function(string, array, callback) {
  for(var i = 0; i < array.length; i++) {
    if(array[i].id === string) {
      callback(array[i]); 
    }
  };
};
//**Pre-prop..ed code**
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

*****OR*****  //'id' used to make for multi-use function
var getUserById = function (id, arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      callback(id, arr[i]);
    };
  };
};

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(id, user){
  console.log('The user with the id of ' + id + ' has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//**My code**
var find = function(array, callback) {
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return array[i];
    }
  };
};
//**Pre-prop..ed code**
//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
});
