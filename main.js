// grabs necessary elements

var varTimer = document.getElementById("timeLeft");
var varStartButton = document.getElementById("startBtn");
var ulChoices = document.getElementById("questionList");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var questionPrompt = document.getElementById("questionPrompt");
var challengeHeader = document.getElementById("challengeHeader");
var challengeDescription = document.getElementById("challengeDescription");
var feedbackDisplay = document.getElementById("feedbackText");
var finalScore = document.getElementById("finalScore");
var userInput = document.getElementById("userInput");
var submitBtn = document.getElementById("submitBtn");
var initials = document.getElementById('initials');
var goBack = document.getElementById("goBack");
var clearHighScores = document.getElementById("clearHighScores");

var timerID;

// sets variables


var varTimeLeft = 60;
var questionIndex = 0;
var feedbackText = "";
var finished = false;

// creates array of question objects

var questions = [

    {
        question: "Commonly used data types DO NOT include: ",
        A: "Strings",
        B: "Booleans",
        C: "Alerts",
        D: "Numbers",
        correctAnswer: "C"
    },

    {
        question: "The condition in an IF/ELSE statement is enclosed within: ",
        A: "Quotes",
        B: "Curly Brackets",
        C: "Parentheses",
        D: "Square Brackets",
        correctAnswer: "C"
    },
    {
        question: "Arrays in JS can be used to store: ",
        A: "Numbers & Strings",
        B: "Other arrays",
        C: "Booleans",
        D: "All of the above",
        correctAnswer: "D"
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        A: "Commas",
        B: "Curly Brackets",
        C: "Quotes",
        D: "Parentheses",
        correctAnswer: "C"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        A: "JS",
        B: "Terminal/Bash",
        C: "For loops",
        D: "Console.log",
        correctAnswer: "D"
    }



]

// sets text properties of list items to match the question prompts

function updateQuestions() {

questionPrompt.textContent = questions[questionIndex].question;
choiceA.textContent = questions[questionIndex].A;
choiceB.textContent = questions[questionIndex].B;
choiceC.textContent = questions[questionIndex].C;
choiceD.textContent = questions[questionIndex].D;

}

// onclick of start button

varStartButton.addEventListener("click", function() {

    // hides start button, sets interval for timer, and sets clear interval + alert when timer hits 0
    console.log(questions.length)
    varStartButton.style.display = 'none';
    challengeHeader.style.display = 'none';
    challengeDescription.style.display = 'none';

    updateQuestions();
    
    timerID = setInterval(updateTimer, 1000);

    function updateTimer() {
        
        if (finished == false) {

        varTimeLeft--;
        
        varTimer.textContent = "Time Left: " + varTimeLeft;
        
        if (varTimeLeft === 0) {
            window.alert("You're out of time");
            clearInterval(timerID);
            hidePrompts();
        }}
     }


   
  

// makes question list visible

    ulChoices.style.display = 'block';



})


// event listener for the ul for questions to check correctness and perform other actions

ulChoices.addEventListener('click', function(event) {

    console.log(questionIndex)
       if ( event.target.dataset.attr == questions[questionIndex].correctAnswer) {

            feedbackText = "Correct!";
            feedbackDisplay.textContent = feedbackText;
           
            if (questionIndex < questions.length -1) 
            {
                questionIndex++
                updateQuestions();
            
            } else {
                console.log("Here")
                hidePrompts();
            
                
                
                
               
                
                

            }

       } else {

        varTimeLeft = varTimeLeft - 10;
        feedbackText = "Wrong!";
        feedbackDisplay.textContent = feedbackText;

        if (questionIndex < questions.length-1) {
        questionIndex++;

        updateQuestions();
    } else {hidePrompts();}
        
       
       }


}



)


function hidePrompts() {
    ulChoices.style.display = 'none';
    questionPrompt.style.display = 'none';
    finished = true;
    challengeHeader.textContent = "All done!";
    challengeHeader.style.display = 'block';
    finalScore.style.display = 'block';
    userInput.style.display = 'flex'
    finalScore.textContent = "Final Score: " + varTimeLeft;


};

submitBtn.addEventListener('click', function() {
    

    if (varTimeLeft > localStorage.getItem("High Score")) {
    localStorage.setItem("Initials", initials.value);
    localStorage.setItem("High Score", varTimeLeft);
    showHighScores();}
    else {showHighScores()}

})


function showHighScores() {

    challengeHeader.textContent = "High Scores";
    finalScore.textContent = "High Score: " + localStorage.getItem("Initials") + " --  " + localStorage.getItem('High Score');
    userInput.style.display = 'none';
    feedbackDisplay.style.display = 'none'
    document.querySelector('.reset').style.display = 'flex'

}

goBack.addEventListener('click', function() {
    location.reload();
    
}
)

clearHighScores.addEventListener('click', function() {

    localStorage.clear();
    finalScore.textContent = "No high score at this time."
}

)