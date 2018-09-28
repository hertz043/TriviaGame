
var questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"];
var correctAnswers = ["Q1-D", "Q2-A", "Q3-C", "Q4-B", "Q5-C", "Q6-B", "Q7-A", "Q8-C", "Q9-D", "Q10-A"];

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var timeRemaining = 60;
var intervalId;


$(document).ready(function() {


//Clicking the start game button hides it and runs the mainGame function
$("#startGame").on("click", function() {
    $("#startPanel").hide();
    $("#activeGamePanel").show();

    mainGame();
});

//Submit answers button, ends game before time runs out
$("#submitAnswers").on("click", function() {
    endGame();
});

//Hides the active game field and shows the end screen, which displays the score and a "Play Again?" button
function endGame() {
    $("#activeGamePanel").hide();
    $("#endPanel").show();

    clearInterval(intervalId);
    
    // checks user answers against correct answers and tallies score.

    //question 1
        let playerAnswer1 = ($("input[name='question1']:checked").attr("value"));
        console.log(playerAnswer1);

        if (playerAnswer1 === "Q1-D") {correct++;}

        else if (playerAnswer1 === undefined) {unanswered++;}

        else {incorrect++;}
        
    //question 2
        let playerAnswer2 = ($("input[name='question2']:checked").attr("value"));
        console.log(playerAnswer2);

        if (playerAnswer2 === "Q2-A") {correct++;}

        else if (playerAnswer2 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 3
        let playerAnswer3 = ($("input[name='question3']:checked").attr("value"));
        console.log(playerAnswer3);

        if (playerAnswer3 === "Q3-C") {correct++;}

        else if (playerAnswer3 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 4
        let playerAnswer4 = ($("input[name='question4']:checked").attr("value"));
        console.log(playerAnswer4);
        
        if (playerAnswer4 === "Q4-B") {correct++;}

        else if (playerAnswer4 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 5
        let playerAnswer5 = ($("input[name='question5']:checked").attr("value"));
        console.log(playerAnswer5);

        if (playerAnswer5 === "Q5-C") {correct++;}

        else if (playerAnswer5 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 6
        let playerAnswer6 = ($("input[name='question6']:checked").attr("value"));
        console.log(playerAnswer6);

        if (playerAnswer6 === "Q6-B") {correct++;}

        else if (playerAnswer6 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 7
        let playerAnswer7 = ($("input[name='question7']:checked").attr("value"));
        console.log(playerAnswer7);

        if (playerAnswer7 === "Q7-A") {correct++;}

        else if (playerAnswer7 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 8
        let playerAnswer8 = ($("input[name='question8']:checked").attr("value"));
        console.log(playerAnswer8);
        
        if (playerAnswer8 === "Q8-C") {correct++;}

        else if (playerAnswer8 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 9
        let playerAnswer9 = ($("input[name='question9']:checked").attr("value"));
        console.log(playerAnswer9);

        if (playerAnswer9 === "Q9-D") {correct++;}

        else if (playerAnswer9 === undefined) {unanswered++;}

        else {incorrect++;}

    //question 10
        let playerAnswer10 = ($("input[name='question10']:checked").attr("value"));
        console.log(playerAnswer10);

        if (playerAnswer10 === "Q10-A") {correct++;}

        else if (playerAnswer10 === undefined) {unanswered++;}

        else {incorrect++;}

    //Display Correct, Incorrect, and Unanswered totals
    $("#correctAnswers").text("Correct answers: " + correct);
    $("#incorrectAnswers").text("Incorrect answers: " + incorrect);
    $("#unAnswers").text("Unanswered: " + unanswered);
                                            
}



function mainGame() {

    //Starts timer counting down
    intervalId = setInterval(countdown, 1000);

    function countdown() {
        timeRemaining--;  
        $("#countdownTimer").text(timeRemaining);

        if (timeRemaining <=10) {
            $("#countdownTimer").css("background-color", "red");
        }

        if (timeRemaining === 0) {
            endGame();
        };
    };

};

});