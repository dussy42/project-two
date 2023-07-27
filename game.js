let displayContainer = document.getElementById("question");
const revealButton = document.getElementById("reveal");
const scoreElement = document.getElementById("score");


const quizArray = [
    {
    id: "0",
    question: "Which of the following has a P4 connector to provide a 12V output?",
    options: ["SCSI cable", "24-pin adapter", "eSATA cable", "EIDE port"],
    correct: "EIDE port",
  },
  {
    id: "1",
    question: "Which of the following technologies can be used for wireless payments?",
    options: ["IR", "NFC", "LTE", "BLUETOOTH"],
    correct: "NFC",
  },
  {
    id: "2",
    question: "Which of the following connection types can be used simultaneously for video, storage, and audio?",
    options: ["Thunderbolt", "DisplayPort", "DVI", "HDMI"],
    correct: "Thunderbolt",
  },
  {
    id:"3",
    question: "Which of the following devices performs forwarding decisions based on MAC addresses?",
    options: ['Repeater','Hub','Router','Switch'],
    correct: 'Switch'
  }
];

/* getting username from input field */

function inpt(){
    var inputEl=document.getElementById("myname");
    var defaultVal=inputEl.defaultValue;
     var currentVal=inputEl.value;
    

   if (defaultVal==currentVal){o
    alert("pls enter a username")
    return false
}
else{
    document.getElementById("nameEl").innerHTML= "Welcome " + currentVal;
    document.getElementById("nameEl").style.color="white";
    document.getElementById("nameEl").className="names"
    document.getElementById("myname").value=""

}
};



const totalScore = quizArray.length * 10;
let answeredQuestions = 0;
let score = 0;

  
function displayQuizQuestions() {
  

  // Clear previous contents of the container
  displayContainer.innerHTML = "";

  quizArray.forEach((quizItem) => {
    // Create <p> element for the question
    const questionElement = document.createElement("p");
    questionElement.textContent = `${+quizItem.id +1}.${quizItem.question}`;

    // Append the question to the container
    displayContainer.appendChild(questionElement);

    // Create buttons for each option
    quizItem.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;

      // Add event listener to check if the selected option is correct
      optionButton.addEventListener("click", () => {
        // Disable all option buttons
        quizItem.options.forEach((btn) => {
          const button = document.getElementById(btn);
          button.disabled = true;
        });

        if (option === quizItem.correct) {
          optionButton.style.backgroundColor = "green";
          optionButton.style.color = "white";
          score += 10;
        } else {
          optionButton.style.backgroundColor = "red";
          optionButton.style.color = "white";
        }

        answeredQuestions++;

        // Check if all questions are answered
        if (answeredQuestions === quizArray.length) {
          revealButton.disabled = false;
        }
      });

      // Set an ID for each option button
      optionButton.id = option;

      // Append the option button to the container
      displayContainer.appendChild(optionButton);
    });
  });


  // Disable reveal answers button initially
  revealButton.disabled = true;
}

  // Add event listener to reveal answers button
  revealButton.addEventListener("click", () => {
    quizArray.forEach((quizItem) => {
      const correctOptionButton = document.getElementById(quizItem.correct);
      correctOptionButton.style.backgroundColor = "green";
      correctOptionButton.style.color = "white";
    });

    // Update the score element
    scoreElement.textContent = score.toString() + "/" + totalScore.toString();
  });
function rule() {
  var btn = document.getElementById("toggleBtn");
  var ul = document.getElementsByTagName("ul")[0];

  if (btn.value === "ON") {
    var li1 = document.createElement('li');
    li1.innerText = "Create a UserName in the input field then click submit";

    var li2 = document.createElement('li');
    li2.innerText = "Click the options which is the best answer, then the background-color changes to red ";

    var li3 = document.createElement('li');
    li3.innerText = "The background-color of correct answer will change to white";

    var li4 = document.createElement('li');
    li4.innerText = "10points for each right answers will be rendered unto the score screen and zero for each wrong choices";
    
    var li5 = document.createElement('li');
    li5.innerText = "click the submit button to get total score on the score screen above";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    btn.value = "OFF";
  } else {
    ul.innerHTML = '';
    btn.value = "ON";
  }
}


// Call the function to display the quiz questions
displayQuizQuestions();
