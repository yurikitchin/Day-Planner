var dateTimeDisplay = moment();
console.log(dateTimeDisplay.toString());
console.log(dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a"));
//Populate current day p tage with day, date and time
document.getElementById("currentDay").innerHTML = dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a");
var timeAMPM = dateTimeDisplay.format("h a")
//Change colour of text area
function textAreaColour(){
    debugger
    console.log(dateTimeDisplay.format("h a"))
    console.log(document.getElementById(timeAMPM).children[0].textContent)
    if (dateTimeDisplay.format("h a") == document.getElementById(timeAMPM).children[0].textContent){
        document.getElementById("1pmArea").style.backgroundColor = "red"
    }
}
textAreaColour()
//if hour is > label, display textarea background as grey
//if hour = label display textaea background as red
//if hour <  label display textare background as green
