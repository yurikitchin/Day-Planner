var dateTimeDisplay = moment();
console.log(dateTimeDisplay.toString());
console.log(dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a"));

//Populate current day p tage with day, date and time
document.getElementById("currentDay").innerHTML = dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a");
var containerElement = document.querySelector(".container");
//turns elements in container into an array
var divTimeArray = Array.from(containerElement.children);
var redIndex = "";
var chooseDiv = "";

//Change colour of text area
function textAreaColour(){
    //need a for loop that cycles through each time block and sets the color
    for (let i = 0; i < 11; i++){
        var changeColor = divTimeArray[i].id;
        var arrayIndexNumber = divTimeArray.indexOf(divTimeArray[i]);          
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
        console.log(changeColor)
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

//add click event to button, checks area button was clicked into and saves text from that area to corresponding dayTasks key
var button = document.getElementsByClassName("btn")
document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event =>{
        //dayTasks = localStorage.getItem.JSON.parse('user')
        console.log(dayTasks)
        chooseDiv = event. currentTarget.parentElement
        var textArea = chooseDiv.children[1]
        var userInput = textArea.value
        var textID = textArea.id
        var existingStorage = JSON.parse(localStorage.getItem('user'))
        dayTasks = existingStorage
        console.log(dayTasks)
        dayTasks[textID] = userInput
        localStorage.setItem('user', JSON.stringify(dayTasks))
        
    })
})

//function to populate each text area from local storge
function populateText (){}
   var populateObject = JSON.parse(localStorage.getItem('user'))
   for (var key in populateObject){
       if (populateObject.hasOwnProperty(key)){
           var CheckKey = key
           var populateKey = populateObject[key]
    for (let i = 0; i < 11; i++){
        selectIDtoPopulate = divTimeArray[i].children[1].id;
       if (selectIDtoPopulate === CheckKey){
        document.getElementById(selectIDtoPopulate).innerText = populateKey
       }    
   }} }
populateText()

//clear button changes all of the values in the dayTask object back to "" and saves to local storage
var clearBtn = document.getElementById('clear')
//add event listener
clearBtn.addEventListener ('click', clearFunction)
//clear function also will reload window to leave all fields blank
function clearFunction () {
    console.log(dayTasks)
}