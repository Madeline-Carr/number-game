//Creates random number and logs it to console.
var randomNumber = Math.floor(Math.random()*10)+1;
//LOGS RANDOM NUMBER TO CONSOLE
console.log(randomNumber);

function makeVar(){
  //Makes a variable with the response.
  var response = document.getElementById("guess").value;
  //Console logs response
  console.log(response);

    if (response < randomNumber) {
      console.log("It is higher than that!!!");
    } else if (response > randomNumber) {
      console.log("It is lower than that!!!");
    } else if (response == randomNumber) {
      console.log("YOU WIN!!!");
    }else {
      console.log("Please enter a number!!!");
    }
};
