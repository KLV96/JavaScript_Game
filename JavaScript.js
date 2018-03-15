
var score = 0;

var pos = 1;

// comment a//
var question1 = { QuestionNum: "1",
                  QuestionText: "Tina's score on her midterm exam was at the 50th percentile. The grades were normally distributed. The exam average was 78 and the standard deviation was 6. What was Tina's score on the exam?",
                  option1: "90",
                  option2: "50",
                  option3: "84",
                  option4: "78",
                  selectedOption1: "",
                  selectedOption2: "",
                  selectedOption3: "",
                  selectedOption4: "",
                  rightAnswer: 1};

// comment b //
var question2 = { QuestionNum: "2",
                  QuestionText: "If 3,500 people took the achievement test, how many scored lower than the 98th percentile?",
                  option1: "70",
                  option2: "3430",
                  option3: "3420",
                  option4: "2%",
                  selectedOption1: "",
                  selectedOption2: "",
                  selectedOption3: "",
                  selectedOption4: "",
                  rightAnswer: 2};

// comment answer c //
var question3 = { QuestionNum: "3",
                  QuestionText: "Which of the following indicates the strongest relationship?",
                  option1: "r= 0.5",
                  option2: "r= 0.09",
                  option3: "r= -0.6",
                  option4: "r^2= 0.2",
                  selectedOption1: "",
                  selectedOption2: "",
                  selectedOption3: "",
                  selectedOption4: "",
                  rightAnswer: 3};

// comment answer b //
var question4 = { QuestionNum: "4",
                  img: "q4.png",
                  QuestionText: "What is the correlation between the following z-scores?",
                  option1: "-0.79",
                  option2: "0.79",
                  option3: "0.97",
                  option4: "-0.97",
                  selectedOption1: "",
                  selectedOption2: "",
                  selectedOption3: "",
                  selectedOption4: "",
                  rightAnswer: 2};

//comment answer d //
var question5 = { QuestionNum: "5",
                  QuestionText: "If the correlation coefficient is 0.8, the percentage of variation in the response variable explained by the variation in the explanatory variable is",
                  option1: "0.80%",
                  option2: "80%",
                  option3: "0.64%",
                  option4: "64%",
                  selectedOption1: "",
                  selectedOption2: "",
                  selectedOption3: "",
                  selectedOption4: "",
                  rightAnswer: 4};

// comment answer c //
var question6 = { QuestionNum: "6",
                QuestionText: "If the coefficient of determination is a positive value, then the regression equation has a",
                option1: "positive slope",
                option2: "negative slope",
                option3: "+ or - slope",
                option4: "positive y intercept",
                selectedOption1: "",
                selectedOption2: "",
                selectedOption3: "",
                selectedOption4: "",
                rightAnswer: 3};

// answer b //
var question7 = { QuestionNum: "7",
              QuestionText: "In regression, the equation that describes how the response variable (y) is related to the explanatory variable (x) is:",
              option1: "the correlation model",
              option2: "the regression model",
              option3: "used to find r",
              option4: "None of these",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 2};


// answer b //
var question8 = { QuestionNum: "8",
              QuestionText: "Probability distribution having shape of bell and in which values of mean lies in center of probability distribution is classified as",
              option1: "continuous",
              option2: "normal",
              option3: "discrete",
              option4: "hyper geometric",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 2};

// answer c//
var question9 = { QuestionNum: "9",
              QuestionText: "In normal distribution, normal curve becomes more wider and more flatter because of",
              option1: "<variance",
              option2: ">variance",
              option3: ">standard deviation",
              option4: "<standard deviation",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 3};

// answer a //
var question10 = { QuestionNum: "10",
              QuestionText: "Successful life of product, time, weight and height are classified as which of the following variable types",
              option1: "continuous random",
              option2: "discrete random",
              option3: "continuous time",
              option4: "none of these",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 1};

// answer b //
var question11 = { QuestionNum: "11",
              QuestionText: "Considering normal distribution, spread is decreased and height of curve is increased for the",
              option1: ">standard deviation",
              option2: "<standard deviation",
              option3: "<variance",
              option4: ">variance",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 2};

// answer c //
var question12 = { QuestionNum: "12",
              QuestionText: "If the probability of a machine producing a defective part is 0.05, what is the probability of finding exactly 5 defective parts from a sample of 100? (Assume that the process follows a binomial distribution and round answer to four places.)",
              option1: "0.0500",
              option2: "0.0900",
              option3: "0.1800",
              option4: "0.5000",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 3};

// answer a //
var question13 = { QuestionNum: "13",
              QuestionText: "Which of the following is not commonly referred to as a measure of central tendency for the normal distribution?",
              option1: "midrange",
              option2: "mean",
              option3: "median",
              option4: "none of the above",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 1};

// answer a //
var question14 = { QuestionNum: "14",
              QuestionText: "Which of the following is not true of the normal distribution curve?",
              option1: "it is asymmetrical",
              option2: "it is bell-shaped",
              option3: "it is linear",
              option4: "it is symmetrical",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 1};

// answer d //
var question15 = { QuestionNum: "15",
              QuestionText: "	Question 10. Rank the score of 8 in the following set: 2; 7; 1; 8; 4; 2; 7; 10; 20:",
              option1: "5",
              option2: "8",
              option3: "3",
              option4: "7",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 4};

// answer d //
// IMAGE Q1 OF DOCUMENT PDF //
var question16 = { QuestionNum: "16",
              img: "q16.png",
              QuestionText: "Refer to the Venn diagram below. What is the probability that a student plays football or baseball?",
              option1: "3/5",
              option2: "7/16",
              option3: "7/10",
              option4: "28/33",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 4};


// answer a //
var question17 = { QuestionNum: "17",
              QuestionText: "Out of 28 students, 12 have at least one brother and 13 have at least one sister. Eight students have both brothers and sisters. How many students do not have either a brother or a sister?",
              option1: "11",
              option2: "5",
              option3: "4",
              option4: "8",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 1};

// answer b //
var question18 = { QuestionNum: "18",
              QuestionText: "If the coefficient of determination is 0.81, the correlation coefficient is",
              option1: " 0.6561",
              option2: "either +0.9 or -0.9",
              option3: "positive",
              option4: "negative",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 2};

// answ b //
var question19 = { QuestionNum: "19",
              QuestionText: "A a card is selected from a deck of 52 cards. Find the probability that it is a red king or a black queen",
              option1: "8/13",
              option2: "1/13",
              option3: "5/13",
              option4: "2/13",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 2};

// answer a //
var question20 = { QuestionNum: "20",
              QuestionText: "Regression analysis was applied between $ sales (y) and $ advertising (x) across all the branches of a major international corporation. The following regression function was obtained. y = 5000 + 7.25x. If the advertising budgets of two branches of the corporation differ by $30,000, then what will be the predicted difference in their sales?",
              option1: "$217,500",
              option2: "$222,500",
              option3: "$5000",
              option4: "$7.25",
              selectedOption1: "",
              selectedOption2: "",
              selectedOption3: "",
              selectedOption4: "",
              rightAnswer: 1};


var totalNumOfQuestions = 20;

runFirstQuestoin();

function runFirstQuestoin()
{
  // used to calculate the final score

  document.getElementById("question").innerHTML = question1.QuestionText;
  document.getElementById("answer1").value = question1.option1;
  document.getElementById("answer2").value = question1.option2;
  document.getElementById("answer3").value = question1.option3;
  document.getElementById("answer4").value = question1.option4;

  // depending on the qustion number the background of each button is modified so that
  // when the user pressed on one it will colour up depending if it is right answer or not
  setButtonsBackgroundDependingOnQuestion(1);
  document.getElementById("previousButtonID").disabled= true;
}

function chooseRightSetQuestion(pos)
{
  switch (pos)
  {
    case 1:
      setOptionsOfCurrentQuestion(question1);
      break;
    case 2:
      setOptionsOfCurrentQuestion(question2);
      break;
    case 3:
      setOptionsOfCurrentQuestion(question3);
      break;
    case 4:
      setOptionsOfCurrentQuestion(question4);
      break;
    case 5:
      setOptionsOfCurrentQuestion(question5);
      break;
    case 6:
      setOptionsOfCurrentQuestion(question6);
      break;
    case 7:
      setOptionsOfCurrentQuestion(question7);
      break;
    case 8:
      setOptionsOfCurrentQuestion(question8);
      break;
    case 9:
      setOptionsOfCurrentQuestion(question9);
      break;
    case 10:
      setOptionsOfCurrentQuestion(question10);
      break;
    case 11:
      setOptionsOfCurrentQuestion(question11);
      break;
    case 12:
      setOptionsOfCurrentQuestion(question12);
      break;
    case 13:
      setOptionsOfCurrentQuestion(question13);
      break;
    case 14:
      setOptionsOfCurrentQuestion(question14);
      break;
    case 15:
      setOptionsOfCurrentQuestion(question15);
      break;
    case 16:
      setOptionsOfCurrentQuestion(question16);
      break;
    case 17:
      setOptionsOfCurrentQuestion(question17);
      break;
    case 18:
      setOptionsOfCurrentQuestion(question18);
      break;
    case 19:
      setOptionsOfCurrentQuestion(question19);
      break;
    case 20:
      setOptionsOfCurrentQuestion(question20);
      break;

  }
}

function setQuestionsAndOptions(passedID)
{

  for (i=0; i < 4 ; i++)
  {
    document.getElementsByClassName("answer")[i].classList.remove("nohover");
    document.getElementsByClassName("answer")[i].classList.remove("rightAnswerSelected");
    document.getElementsByClassName("answer")[i].style.color = "#000";
  }

  runBeforeSettingBg();

  chooseRightSetQuestion(pos);

  if (passedID == "nextButtonID")
  {

    pos++;
    document.getElementById("previousButtonID").disabled= false;
  }
  else if (passedID == "previousButtonID")
  {
    pos--;
    if (pos==0)
    {
       document.getElementById("previousButtonID").disabled= true;
       pos = 1;
       return;
    }
  }

  document.querySelector(".questionNumVal").innerHTML =  pos;

  switch (pos)
  {

    case 1:
      setQuestionAndOptions(question1,1);
      break;

    case 2:
      setQuestionAndOptions(question2,2);
      break;

    case 3:
      if(document.getElementById("q4Image"))
        document.getElementById("q4Image").remove();
      setQuestionAndOptions(question3,3);
      break;

    case 4:
      addQuestionImage(question4.img);
      setQuestionAndOptions(question4,4);
      break;

    case 5:
      if(document.getElementById("q4Image"))
        document.getElementById("q4Image").remove();
      setQuestionAndOptions(question5,5);
      break;

    case 6:
      setQuestionAndOptions(question6,6);
      break;

    case 7:
      setQuestionAndOptions(question7,7);
      break;

    case 8:
      setQuestionAndOptions(question8,8);
      break;

    case 9:
      setQuestionAndOptions(question9,9);
      break;

    case 10:
      setQuestionAndOptions(question10,10);
      break;

    case 11:
      setQuestionAndOptions(question11,11);
      break;

    case 12:
      setQuestionAndOptions(question12,12);
      break;

    case 13:
      setQuestionAndOptions(question13,13);
      break;

    case 14:
      setQuestionAndOptions(question14,14);
      break;

    case 15:
      if(document.getElementById("q16Image"))
        document.getElementById("q16Image").remove();
      setQuestionAndOptions(question15,15);
      break;

    case 16:
      setQuestionAndOptions(question16,16);
      addQuestionImage(question16.img);
      break;

    case 17:
      if(document.getElementById("q16Image"))
        document.getElementById("q16Image").remove();
      setQuestionAndOptions(question17,17);
      break;

    case 18:
      setQuestionAndOptions(question18,18);
      break;

    case 19:
      setQuestionAndOptions(question19,19);
      break;

    case 20:
      setQuestionAndOptions(question20,20);
      break;


    default:
      document.querySelector(".questionNumVal").innerHTML =  "20";
      showFinalScore();
  }

}

function addQuestionImage(imageSrc)
{
  var x = document.createElement("IMG");

  if(imageSrc == question16.img )
    x.setAttribute('id','q16Image')
  else if (imageSrc == question4.img)
    x.setAttribute('id','q4Image')

  x.setAttribute("src", imageSrc);
  // div.appendChild(x);
  document.getElementById("questionImage").appendChild(x);
}

function setQuestionAndOptions(question, caseNum)
{
  reset();
  document.getElementById("question").innerHTML = question.QuestionText;
  document.getElementById("answer1").value = question.option1;
  document.getElementById("answer2").value = question.option2;
  document.getElementById("answer3").value = question.option3;
  document.getElementById("answer4").value = question.option4;
  setButtonsBackgroundDependingOnQuestion(caseNum);
  setBackgroundDependingOnOptionValues(question);
}


function runBeforeSettingBg()
{
  if (pos == 1 )
  {
    setbgBefore(question1);
  }
  else if ( pos == 2)
  {
    setbgBefore(question2);
  }
  else if ( pos == 3)
  {
    setbgBefore(question3);
  }
}

function checkRightAnswerSelected()
{

  var correctAnswerSelected;
  for (i=0; i < 4 ; i++)
  {
    if (document.getElementsByClassName("answer")[i].style.backgroundColor == "green")
    {
      return i;
    }
  }

  return -1;

}

// This is only called when the correct answer is selected
function changeTextColour(correctAnswer)
{
  for (i=0; i < 4; i++)
  {
    document.getElementsByClassName("answer")[i].style.color = "#a19e9e";
  }
  document.getElementsByClassName("answer")[correctAnswer].style.color = "#000";
}

function reset()
{
  for (i=0; i < 4 ; i++)
  {
    document.getElementsByClassName("answer")[i].disabled= false;
    document.getElementsByClassName("answer")[i].style.backgroundColor  = "";
  }
}

function setOptionsOfCurrentQuestion(currentQuestion)
{
  currentQuestion.selectedOption1 = document.getElementById("answer1").style.backgroundColor;
  currentQuestion.selectedOption2 = document.getElementById("answer2").style.backgroundColor;
  currentQuestion.selectedOption3 = document.getElementById("answer3").style.backgroundColor;
  currentQuestion.selectedOption4 = document.getElementById("answer4").style.backgroundColor;
}



function setbgBefore(currentQuestion)
{
    if (currentQuestion.selectedOption1 == "green" ||
        currentQuestion.selectedOption2 == "green" ||
        currentQuestion.selectedOption3 == "green" ||
        currentQuestion.selectedOption4 == "green")
    {
      for (i=0; i < 4 ; i++)
      {
        document.getElementsByClassName("answer")[i].disabled= true;
      }
    }

    if (currentQuestion.selectedOption1 == "green" || currentQuestion.selectedOption1 == "red")
    {
        document.getElementById("answer1").style.backgroundColor = currentQuestion.selectedOption1;
    }

    if (currentQuestion.selectedOption2 == "green" || currentQuestion.selectedOption2 == "red")
    {
      document.getElementById("answer2").style.backgroundColor = currentQuestion.selectedOption2;
    }
    if (currentQuestion.selectedOption3 == "green" || currentQuestion.selectedOption3 == "red")
    {
      document.getElementById("answer3").style.backgroundColor = currentQuestion.selectedOption3;
    }
    if (currentQuestion.selectedOption4 == "green" || currentQuestion.selectedOption4 == "red")
    {
      document.getElementById("answer4").style.backgroundColor = currentQuestion.selectedOption4;
    }

}


function setBackgroundDependingOnOptionValues(currentQuestion)
{
    if (currentQuestion.selectedOption1 == "green" ||
        currentQuestion.selectedOption2 == "green" ||
        currentQuestion.selectedOption3 == "green" ||
        currentQuestion.selectedOption4 == "green")
    {
      for (i=0; i < 4 ; i++)
      {
        document.getElementsByClassName("answer")[i].disabled= true;
      }
    }

    document.getElementById("answer1").style.backgroundColor = currentQuestion.selectedOption1;
    document.getElementById("answer2").style.backgroundColor = currentQuestion.selectedOption2;
    document.getElementById("answer3").style.backgroundColor = currentQuestion.selectedOption3;
    document.getElementById("answer4").style.backgroundColor = currentQuestion.selectedOption4;

    if(checkRightAnswerSelected() != -1)
      changeTextColour(checkRightAnswerSelected());
}

function setButtonsBackgroundDependingOnQuestion(questionNum)
{
    switch(questionNum)
    {
      case 1:
          setButtonsBackgroundDependingOnOption(question1.rightAnswer);
          break;
      case 2:
          setButtonsBackgroundDependingOnOption(question2.rightAnswer);
          break;
      case 3:
          setButtonsBackgroundDependingOnOption(question3.rightAnswer);
          break;
      case 4:
          setButtonsBackgroundDependingOnOption(question4.rightAnswer);
          break;
      case 5:
          setButtonsBackgroundDependingOnOption(question5.rightAnswer);
          break;
      case 6:
          setButtonsBackgroundDependingOnOption(question6.rightAnswer);
          break;
      case 7:
          setButtonsBackgroundDependingOnOption(question7.rightAnswer);
          break;
      case 8:
          setButtonsBackgroundDependingOnOption(question8.rightAnswer);
          break;
      case 9:
          setButtonsBackgroundDependingOnOption(question9.rightAnswer);
          break;

      case 10:
          setButtonsBackgroundDependingOnOption(question10.rightAnswer);
          break;

      case 11:
          setButtonsBackgroundDependingOnOption(question11.rightAnswer);
          break;

      case 12:
          setButtonsBackgroundDependingOnOption(question12.rightAnswer);
          break;

      case 13:
          setButtonsBackgroundDependingOnOption(question13.rightAnswer);
          break;

      case 14:
          setButtonsBackgroundDependingOnOption(question14.rightAnswer);
          break;

      case 15:
          setButtonsBackgroundDependingOnOption(question15.rightAnswer);
          break;

      case 16:
          setButtonsBackgroundDependingOnOption(question16.rightAnswer);
          break;

      case 17:
          setButtonsBackgroundDependingOnOption(question17.rightAnswer);
          break;

      case 18:
          setButtonsBackgroundDependingOnOption(question118.rightAnswer);
          break;

      case 19:
          setButtonsBackgroundDependingOnOption(question19.rightAnswer);
          break;

      case 20:
          setButtonsBackgroundDependingOnOption(question20.rightAnswer);
          break;

      default:
    }
}

function setButtonsBackgroundDependingOnOption(correctOption)
{
  switch (correctOption) {
    case 1:
      document.getElementById('answer1').onclick = function() {rightAnswer("answer1");}; // a
      document.getElementById('answer2').onclick = function() {wrongAnswer("answer2");};
      document.getElementById('answer3').onclick = function() {wrongAnswer("answer3");};
      document.getElementById('answer4').onclick = function() {wrongAnswer("answer4");};
    break;

    case 2:
      document.getElementById('answer1').onclick = function() {wrongAnswer("answer1");};
      document.getElementById('answer2').onclick = function() {rightAnswer("answer2");}; // b
      document.getElementById('answer3').onclick = function() {wrongAnswer("answer3");};
      document.getElementById('answer4').onclick = function() {wrongAnswer("answer4");};
    break;

    case 3:
      document.getElementById('answer1').onclick = function() {wrongAnswer("answer1");};
      document.getElementById('answer2').onclick = function() {wrongAnswer("answer2");};
      document.getElementById('answer3').onclick = function() {rightAnswer("answer3");}; // c
      document.getElementById('answer4').onclick = function() {wrongAnswer("answer4");};
    break;

    case 4:
      document.getElementById('answer1').onclick = function() {wrongAnswer("answer1");};
      document.getElementById('answer2').onclick = function() {wrongAnswer("answer2");};
      document.getElementById('answer3').onclick = function() {wrongAnswer("answer3");};
      document.getElementById('answer4').onclick = function() {rightAnswer("answer4");}; // d
    break;
  }
}

var div = document.getElementById("star");

function wrongAnswer(name)
{
  document.getElementsByName(name)[0].style.backgroundColor  = "red";
  document.getElementsByName(name)[0].style.color  = "black";
  calculateScore(-3);
  document.getElementsByName(name)[0].disabled= true;
}

function rightAnswer(name)
{


  document.getElementsByName(name)[0].style.backgroundColor  = "green";
  document.getElementsByName(name)[0].style.color  = "black";
  calculateScore(10);
  for (i=0; i < 4 ; i++)
  {
    document.getElementsByClassName("answer")[i].classList.add("nohover");
    document.getElementsByClassName("answer")[i].disabled= true;
  }

  if(checkRightAnswerSelected() != -1)
    changeTextColour(checkRightAnswerSelected());

}

function calculateScore(score)
{
  this.score += score;
  if (score <  0)
  {
    document.querySelector(".score").style.color = "red";
  }
  else
  {
    document.querySelector(".score").style.color = "green";
  }

  document.querySelector(".scoreVal").innerHTML =  this.score;

}

function showFinalScore()
{

    var percentage = Math.round((score/(totalNumOfQuestions*10)) * 100);

    // for (i=0; i < 4 ; i++)
    // {
    //   document.getElementsByClassName("answer")[i].style.visibility= "hidden";
    // }
    // document.getElementsByClassName("navButtons")[0].style.visibility= "hidden";
    // document.getElementsByClassName("navButtons")[1].style.visibility= "hidden";
    // document.getElementsByClassName("score")[0].style.visibility= "hidden";
    // document.getElementsByClassName("question")[0].style.visibility= "hidden";
    var audio = document.getElementById("myAudio");
    document.getElementById("answer1").outerHTML='';
    document.getElementById("answer2").outerHTML='';
    document.getElementById("answer3").outerHTML='';
    document.getElementById("answer4").outerHTML='';
    document.getElementById("previousButtonID").outerHTML='';
    document.getElementById("nextButtonID").outerHTML='';
    document.getElementById("question").outerHTML='';

    if (percentage < 0)
    {
      percentage = 0;
    }

    if (percentage >= 90 )
    {
      // 5 stars
      makeStars(5);
      audio.play();

    }

    else if (percentage >= 80)
    {
      // 4 stars
      makeStars(4);
      makeEmptyStars(1);
    }
    else if (percentage >= 70)
    {
      // 3 stars
      makeStars(3);
      makeEmptyStars(2);
    }
    else if (percentage >= 60)
    {
      // 2 stars
      makeStars(2);
      makeEmptyStars(3);
    }
    else if (percentage <= 50 && percentage != 0)
    {
      // 1 star
      makeStars(1);
      makeEmptyStars(4);
    }
    else if (percentage == 0)
    {
      makeEmptyStars(5);
    }

      document.querySelector(".finalScore").innerHTML =  percentage + "%";

      // replay button
      showReplayButton();

}

function showReplayButton()
{
  document.getElementById("replayButton").disabled = false;
}

function makeStars(numOfStars)
{
  for (i=1; i <= numOfStars ; i++)
  {
    var x = document.createElement("IMG");
    x.setAttribute("src", "star.png");
    x.setAttribute("width", "180");
    x.setAttribute("height", "150");

    x.setAttribute("margin-left", "auto");
    x.setAttribute("margin-right", "auto");

    div.appendChild(x);
  }
}

function makeEmptyStars(numOfStars)
{
  for (i=1; i <= numOfStars ; i++)
  {
    var x = document.createElement("IMG");
    x.setAttribute("src", "empty_star.png");
    x.setAttribute("width", "180");
    x.setAttribute("height", "150");

    x.setAttribute("margin-left", "auto");
    x.setAttribute("margin-right", "auto");

    div.appendChild(x);
  }
}

function refreshPage()
{
  location.reload();
}
