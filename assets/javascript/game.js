var winsNum = 0;
var losNum = 0;
var totalCal = 0;
var getCalories = 0;
var waffleCal = Math.floor(Math.random() * 12) + 1;
var burritoCal = Math.floor(Math.random() * 12) + 1;
var pizzaCal = Math.floor(Math.random() * 12) + 1;
var burgerCal = Math.floor(Math.random() * 12) + 1;
$("#wins-number").text("0");
$("#losses-number").text("0");


function setCalories(){
    calorieGoal = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(calorieGoal);
}
setCalories();
console.log(calorieGoal);

$( document ).ready(function() {
    $('#total-cal').text(totalCal);
    $("#waffle-pic").on("click", function(){
        totalCal = totalCal + waffleCal;
        $("#total-cal").text(totalCal);
        setTimeout(checkTotal, 1000);
    });
    $("#burrito-pic").on("click", function(){
        totalCal += burritoCal;
        $("#total-cal").text(totalCal);
        setTimeout(checkTotal, 1000);

    });
    $("#pizza-pic").on("click", function(){
        totalCal += pizzaCal;
        $("#total-cal").text(totalCal);
        setTimeout(checkTotal, 1000);
    });
    $("#burger-pic").on("click", function(){
        totalCal += burgerCal;
        $("#total-cal").text(totalCal);
        setTimeout(checkTotal, 1000);
    });
});
 function checkTotal() {
     if (totalCal === calorieGoal){
         alert("You win!");
         resetGame();
         winsNum = winsNum + 1;
        $("#wins-number").text(winsNum);
     }
     else if (totalCal > calorieGoal){
         alert("You lose!");
         resetGame();
         losNum = losNum + 1;
         $("#losses-number").text(losNum);
     }
 }

function resetGame() {
    waffleCal = Math.floor(Math.random() * 12) + 1;
    burritoCal = Math.floor(Math.random() * 12) + 1;
    pizzaCal = Math.floor(Math.random() * 12) + 1;
    burgerCal = Math.floor(Math.random() * 12) + 1;
    totalCal = 0;
    $("#total-cal").text(totalCal);
    setCalories();
}