// CREATE-A-QUIZ
// CHESS QUIZ

// Event Listener
document.getElementById("btn").addEventListener("click", markQuiz);
function markQuiz() {
  let input1 = document.getElementById("question1").value;
  input1 = input1.toLowerCase();
  let input2 = document.getElementById("question2").value;
  input2 = input2.toLowerCase();
  let input3 = document.getElementById("question3").value;
  input3 = input3.toLowerCase();
  let input4 = document.getElementById("question4").value;
  input4 = input4.toLowerCase();
  let totalGrade = 0;
  let percent = 0;

  //   Question 1
  if (input1 === "knight" || input1 === "the knight") {
    document.getElementById("markQuestion1").innerHTML = "Correct";
    document.getElementById("markQuestion1").style.color = "lightgreen";
    document.getElementById("question1").style.borderColor = "lightgreen";
    document.getElementById("question1").style.borderWidth = "3px";
    totalGrade++;
    percent += 25;
  } else {
    document.getElementById("markQuestion1").innerHTML = "Incorrect";
    document.getElementById("markQuestion1").style.color = "red";
    document.getElementById("question1").style.borderColor = "red";
    document.getElementById("question1").style.borderWidth = "3px";
  }

  //   Question 2
  if (input2 === "16" || input2 === "sixteen") {
    document.getElementById("markQuestion2").innerHTML = "Correct";
    document.getElementById("markQuestion2").style.color = "lightgreen";
    document.getElementById("question2").style.borderColor = "lightgreen";
    document.getElementById("question2").style.borderWidth = "3px";
    totalGrade++;
    percent += 25;
  } else {
    document.getElementById("markQuestion2").innerHTML = "Incorrect";
    document.getElementById("markQuestion2").style.color = "red";
    document.getElementById("question2").style.borderColor = "red";
    document.getElementById("question2").style.borderWidth = "3px";
  }

  //   Question 3
  if (input3 === "king" || input3 === "the king") {
    document.getElementById("markQuestion3").innerHTML = "Correct";
    document.getElementById("markQuestion3").style.color = "lightgreen";
    document.getElementById("question3").style.borderColor = "lightgreen";
    document.getElementById("question3").style.borderWidth = "3px";
    totalGrade++;
    percent += 25;
  } else {
    document.getElementById("markQuestion3").innerHTML = "Incorrect";
    document.getElementById("markQuestion3").style.color = "red";
    document.getElementById("question3").style.borderColor = "red";
    document.getElementById("question3").style.borderWidth = "3px";
  }

  //   Question 4
  if (
    input4 === "rook" ||
    input4 === "bishop" ||
    input4 === "knight" ||
    input4 === "pawn" ||
    input4 === "the rook" ||
    input4 === "the bishop" ||
    input4 === "the knight" ||
    input4 === "the pawn"
  ) {
    document.getElementById("markQuestion4").innerHTML = "Correct";
    document.getElementById("markQuestion4").style.color = "lightgreen";
    document.getElementById("question4").style.borderColor = "lightgreen";
    document.getElementById("question4").style.borderWidth = "3px";
    totalGrade++;
    percent += 25;
  } else {
    document.getElementById("markQuestion4").innerHTML = "Incorrect";
    document.getElementById("markQuestion4").style.color = "red";
    document.getElementById("question4").style.borderColor = "red";
    document.getElementById("question4").style.borderWidth = "3px";
  }

  //   Final Score
  document.getElementById(
    "score"
  ).innerHTML = `${totalGrade} / 4 (${percent}%)`;

  //   Phrase
  if (totalGrade == "4") {
    document.getElementById("phrase").innerHTML = "Excellent!";
  } else if (totalGrade == "3") {
    document.getElementById("phrase").innerHTML = "Great job!";
  } else if (totalGrade == "2") {
    document.getElementById("phrase").innerHTML = "Not too bad.";
  } else if (totalGrade == "1") {
    document.getElementById("phrase").innerHTML = "Try again.";
  } else {
    document.getElementById("phrase").innerHTML = "Atrocious!";
  }
}
