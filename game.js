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

 