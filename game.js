function rule(){
    var btn=document.getElementById("toggleBtn");

    
    if (btn.value=="ON"){
    var ul=document.getElementsByTagName("ul");
    var listItems=document.getElementsByTagName("p");
   
    ul.innerText="Game Rules";
    listItems[0].innerText="Click the start game button";
    listItems[1].innerText="A score will be rendered onscreen";
    listItems[2].innerText="Press Hold button to push your score to the score button";
    listItems[3].innerText="While on hold, the second Player could do the same as in 1 and two";
    
    btn.value="OFF"
 }
 else{
    var ul=document.getElementsByTagName("ul");
    var listItems=document.getElementsByTagName("p")
    ul.innerText="Game Rules";
    listItems[0].innerText="";
    listItems[1].innerText="";
    listItems[2].innerText="";
    listItems[3].innerText="";
    btn.value="ON"
    
 }
};

/* getting username from input field */

function inpt(){
    var inputEl=document.getElementById("myname");
    var defaultVal=inputEl.defaultValue;
     var currentVal=inputEl.value;

   if (defaultVal==currentVal){
   document.getElementById("nameEl").innerHTML=" Continue as a guest";
}
else{
    document.getElementById("nameEl").innerHTML= "Welcome " + currentVal;
    document.getElementById("nameEl").style.color="white";
    document.getElementById("nameEl").className="names"

}
};



/* the definition of correct answer for question 1*/
let boxes=document.getElementsByTagName("li");
for(let box of boxes){
    box.addEventListener("click", function onClick(){
        var rightAns=document.getElementById("fourth")
        let correct=rightAns;

        //disable other options
            for(let option of boxes){
                option.style.pointerEvents="none"
            }
            if(correct===firstQues){
                first()
            }
            else if(correct===secondQues){
                sec()
            }
            else if(correct===thirdQues){
                third()
            }
            else{
                rightAns.innerHTML= "EIDE port" + " correct answer";
            rightAns.style.backgroundColor="white";
            }
    });
}

/* declaring option one if clicked */
let firstQues=document.getElementById("first");
firstQues.addEventListener("click", function first(){
firstQues.style.backgroundColor="goldenrod"

});

/* declaring option two if clicked */
let secondQues=document.getElementById("second");
secondQues.addEventListener("click", function sec(){
secondQues.style.backgroundColor="goldenrod"

});

/* declaring option third if clicked */
let thirdQues=document.getElementById("third");
thirdQues.addEventListener("click", function third(){
thirdQues.style.backgroundColor="goldenrod";

});




/* function to reveal answer*/
function rev(){
  document.getElementById("pan").textContent= "EIDE port";
   document.getElementById("pan").style.backgroundColor="white"
};



/* javacript codes for the second question */

var oils=document.getElementsByClassName("opt");
for(let oil of oils){
    oil.addEventListener("click", function palm(){
    var bestAns=document.getElementById("opt2");
    let correctAns=bestAns;

    //disable other options
    for(let option of oils){
        option.style.pointerEvents="none";
    }
    if(correctAns===quesTwo1){
       ir()
    }
    
   else if(correctAns===quesTwo3){
        lte()
    }

  else if(correctAns===quesTwo4){
          blueTooth()
   }

   else{
    bestAns.innerHTML="NFC" + " correct answer";
    bestAns.style.backgroundColor="white";
   }
        
    });

}

/* declaring option one in question 2 if clicked */
var quesTwo1=document.getElementById("opt1");
quesTwo1.addEventListener("click", function ir(){
    quesTwo1.style.backgroundColor="goldenrod"
})


 /* declaring option 3 in question 2 if clicked */
 var quesTwo3=document.getElementById("opt3");
 quesTwo3.addEventListener("click", function lte(){
    quesTwo3.style.backgroundColor="goldenrod"
 })

 /* declaring option 4 in question 2 if clicked */
 var quesTwo4=document.getElementById("opt4");
 quesTwo4.addEventListener("click", function blueTooth(){
    quesTwo4.style.backgroundColor="goldenrod"
 });

/*revealing the answers for question2*/
function showAns(){
    document.getElementById("wireless").textContent="NFC";
    document.getElementById("wireless").style.backgroundColor="white";
};


/*third question*/
var bottles=document.getElementsByClassName("optn");
for( let bottle of bottles){
bottle.addEventListener("click", function myCon(){
var perfectAns=document.getElementById("one");
var result=perfectAns;
 
for( let option of bottles){
    option.style.pointerEvents="none";
}
 if(result===questThree2){
    displayPort()

 }
else if(result===questThree3){
    dvi()
 }
 else if(result===questThree4){
    hdmi()
 }
 else{
  perfectAns.innerHTML="Thunderbolt" + " correct answer"
  perfectAns.style.backgroundColor="white";
 }
});
}

/* declaring option two in question 3 if clicked */
var questThree2=document.getElementById("two");
questThree2.addEventListener("click", function displayPort(){
    questThree2.style.backgroundColor="goldenrod"
});

/* declaring option three in question 3 if clicked */
var questThree3=document.getElementById("three");
questThree3.addEventListener("click", function dvi(){
    questThree3.style.backgroundColor="goldenrod"
});

/* declaring option four in question 3 if clicked */
var questThree4=document.getElementById("four");
questThree4.addEventListener("click", function hdmi(){
    questThree4.style.backgroundColor="goldenrod"
});

/*revealing the answers for question3*/
function showAnswer(){
    document.getElementById("connection").textContent="Thunderbolt";
    document.getElementById("connection").style.backgroundColor="white"
}