var dateTimeDisplay = moment();
console.log(dateTimeDisplay.toString());
console.log(dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a"));

//Populate current day p tage with day, date and time
document.getElementById("currentDay").innerHTML = dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a");
var containerElement = document.querySelector(".container");
console.log(containerElement.children);
var divTimeArray = Array.from(containerElement.children);
console.log(divTimeArray)

//Change colour of text area

//turns elements in container into an array

var redIndex = ""

function textAreaColour(){
    console.log(dateTimeDisplay.format("h a"))
    //need a for loop that cycles through each time block and sets the color
    for (let i = 0; i < divTimeArray.length; i++){
        var changeColor = divTimeArray[i].id;
        var arrayIndexNumber = divTimeArray.indexOf(divTimeArray[i]);      
        console.log(arrayIndexNumber)
    
    //if its the start of the day set color as green
    if (dateTimeDisplay.format("h") <= "6"){
        document.getElementById(changeColor).children[1].style.backgroundColor = "#84F05B"
    //if hour = label display textaea background as red
    } else if (dateTimeDisplay.format("h a") == divTimeArray[i].id){
        document.getElementById(changeColor).children[1].style.backgroundColor = "red"
        redIndex = divTimeArray.indexOf(divTimeArray[i]);
        console.log(arrayIndexNumber)
    //if hour is > label, display textarea background as grey    
    } else if  (redIndex === "") {
        document.getElementById(changeColor).children[1].style.backgroundColor = "grey"
    //if hour is < display as green
    } else if (redIndex < arrayIndexNumber){
        console.log("this works")
        document.getElementById(changeColor).children[1].style.backgroundColor = "#84F05B"
    }}
    
    
    //All textareas lower on the array are shown as grey
     
        
    
    
 
    //if hour <  label display textare background as green
} 
 
 
textAreaColour()



