// Declare a global variable 'shout' with the value 'Shout'
var shout = 'Shout';
// Define a function 'justShout' that logs the 'shout' variable twice with a comma and space in between
function justShout() {
  console.log(shout + ', ' + shout);
  return; // Function returns, ending its execution
}

// Define a function 'shoutItAllOut' that logs the 'shout' variable followed by the string ' it all out!'
function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return; // Function returns, ending its execution
}
// Call the 'justShout' function to execute its code
justShout();
// Call the 'shoutItAllOut' function to execute its code
shoutItAllOut();

// Define a function 'sayLions' that declares a local variable 'animal' with the value 'Lions' and logs it
function sayLions() {
  var animal = 'Lions';
  console.log(animal);
  return; // Function returns, ending its execution
}
// Define a function 'sayTigers' that declares a local variable 'animal' with the value 'Tigers' and logs it with a preceding 'and' and trailing 'and'
function sayTigers() {
    var animal = 'Tigers';
  console.log('and ' + animal + ' and ');
  return; // Function returns, ending its execution
}

// Declare a global variable 'bears' with the value 'Bears'
var bears = 'Bears';
// Define a function 'sayBears' that logs the 'bears' variable followed by '! OH MY!'
function sayBears() {
  console.log(bears + '! OH MY!');
  return; // Function returns, ending its execution
}
// Call the 'sayLions' function to execute its code
sayLions();
// Call the 'sayTigers' function to execute its code
sayTigers();
// Call the 'sayBears' function to execute its code
sayBears();

// Define a function 'singAlong' that declares a local variable 'sing' with the value 'Sing' and logs it followed by a comma
function singAlong() {
  var sing = "Sing";
  console.log(sing + ',');
  // Define a nested function 'singASong' that logs the 'sing' variable followed by ' a Song.'
  var singASong = function() {
    console.log(sing + ' a Song.');
  };
    // Call the nested 'singASong' function to execute its code
  singASong();
}
// Call the 'singAlong' function to execute its code
singAlong();
