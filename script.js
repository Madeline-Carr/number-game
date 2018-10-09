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
      var lowResponses = ["Try guessing higher!","The number is a bit larger than that!","It is not that low!", "Guess higher!"]
      var randNumber= Math.floor(Math.random()*4);
      document.getElementById("responsePlace").innerHTML = lowResponses[randNumber];
    } else if (response > randomNumber) {
      var highResponses = ["Try guessing lower!","The number is a bit smaller than that!","It is not that high!", "Guess lower!"]
      var randNumber= Math.floor(Math.random()*4);
      document.getElementById("responsePlace").innerHTML = highResponses[randNumber];
    } else if (response == randomNumber) {
      console.log("YOU WIN!!!");
      document.getElementById("responsePlace").innerHTML = "YOU WIN!";
      startAgain();
    }else {
      console.log("Please enter a number!!!");
      document.getElementById("responsePlace").innerHTML = "Please enter a number!!!";
    }
};

function startAgain() {
  randomNumber = Math.floor(Math.random()*10)+1;
  console.log(randomNumber);
}

//Add enviroment backgrounds.
//Pick level difficulty.
//Change responses.
