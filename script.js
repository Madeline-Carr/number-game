//Creates random number and logs it to console.
var randomNumber = Math.floor(Math.random()*10)+1;
//LOGS RANDOM NUMBER TO CONSOLE
console.log(randomNumber);

function makeVar(){
  //Makes a variable with the response.
  var response = document.getElementById("guess").value;
  //Console logs response
  console.log(response);
  // Read the Value and console log a response.
    if (response < randomNumber) {
      console.log("It is higher than that!!!");
    } else if (response > randomNumber) {
      console.log("It is lower than that!!!");
    } else if (response == randomNumber) {
      console.log("YOU WIN!!!");
      startAgain();
    }else {
      console.log("Please enter a number!!!");
    }
};

function startAgain() {
  randomNumber = Math.floor(Math.random()*10)+1;
  console.log(randomNumber);
}

//Add enviroment backgrounds.
//Pick level difficulty.
//Change responses.
//
//
//
//
//
//
