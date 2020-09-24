 var mainText = document.getElementById("mainText").innerHTML;
 
 var state = 1;

 var randomChars = ["~", "!", "@", "$", " %", "^", "&", "*", "(", "+", ")"]

 var lowerText = document.getElementById("lowerText").innerHTML;

// Together unnecessary???
 var i = (Math.floor(Math.random()* 10));
 var correctNumber = randomChars[i];

 // Needs to be in loop ?


 var str = "";

 // Need functiont to assign randomChars to numbers
function assignChars(){
    for (x = 0; x < 100; x++){
        if (x % 9 == 0){
            str = str + x + " = " + correctNumber + "<br>";
        } else {
            var z = (Math.floor(Math.random()* 10));
            var incorrectNumber = randomChars[z];
            str = str + x + " = " + incorrectNumber + "<br>";
        }
    }
    str = str;
    return str;
 } 

 // Function to add 1 to state
 function newState(){
    state++;
    changeState();
 }

 // Function called on reset button to set state back to 1
 function resetState(){
    state=1;
    changeState();
 }

 // Big if else function deciding what to display when
 function changeState(){
     if (state == 1){
         document.getElementById("mainText").innerHTML="I can read your mind <br>";
         document.getElementById("lowerText").innerHTML="";
         document.getElementById("nextButton").style.visibility= "initial";
         document.getElementById("resetButton").style.visibility= "hidden";
     }
     else if (state == 2){
         document.getElementById("mainText").innerHTML="Pick a number from 01 - 99 <br>";
         document.getElementById("lowerText").innerHTML="Click next when you have your number";
         document.getElementById("nextButton").style.visibility= "initial";
         document.getElementById("resetButton").style.visibility= "initial";
     }
     else if (state == 3){
        document.getElementById("mainText").innerHTML="Add both digits together to get a new number <br>";
        document.getElementById("lowerText").innerHTML="Ex: 14 is 1 + 4 = 5 <br> Click next to proceed";
        document.getElementById("nextButton").style.visibility= "initial";
        document.getElementById("resetButton").style.visibility= "initial";
     }
     else if (state == 4){
        document.getElementById("mainText").innerHTML="Subtract your new number from the original number <br>";
        document.getElementById("lowerText").innerHTML="Ex: 14 - 5 = 9 <br> Click next to proceed";
        document.getElementById("nextButton").style.visibility= "initial";
        document.getElementById("resetButton").style.visibility= "initial";
     }
     // show character assignments
     else if (state == 5){
        document.getElementById("mainText").innerHTML= assignChars();
        document.getElementById("lowerText").innerHTML="Find your new number and remember the symbol associated with it";
        document.getElementById("nextButton").style.visibility= "initial";
        document.getElementById("resetButton").style.visibility= "initial";
     }
     else if (state == 6){
        document.getElementById("mainText").innerHTML="Your symbol is <br> " + correctNumber;
        document.getElementById("lowerText").innerHTML="";
        document.getElementById("nextButton").style.visibility= "hidden";
        document.getElementById("resetButton").style.visibility= "initial";
     }
 }


 changeState();