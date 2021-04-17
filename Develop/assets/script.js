var dateTimeDisplay = moment();
console.log(dateTimeDisplay.toString());
console.log(dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a"));

//Populate current day p tage with day, date and time
document.getElementById("currentDay").innerHTML = dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a");
var containerElement = document.querySelector(".container");
//turns elements in container into an array
var divTimeArray = Array.from(containerElement.children);
var redIndex = ""

//Change colour of text area
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
    
}  
textAreaColour()

//save plans to local storage
//create object that holds text from the text area and saves it to that ID
var dayTasks = {
    area7am: "",
    area8am: "",
    area9am: "",
    area10am: "",    
    area11am: "",
    area12pm: "",
    area1pm: "",
    area2pm: "",
    area3pm: "",
    area4pm: "",
    area5pm: "",
}

//localStorage.setItem('user', JSON.stringify(dayTasks))

//add click event to button, checks area button was clicked into and saves text from that area to corresponding dayTasks key
var button = document.getElementsByClassName("btn")
console.log(button);
document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event =>{
        var chooseDiv = event. currentTarget.parentElement
        var textArea = chooseDiv.children[1]
        var userInput = textArea.value
        var textID = textArea.id
        console.log(userInput)
        console.log(textID)
    })
})
