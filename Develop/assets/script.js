var dateTimeDisplay = moment();
console.log(dateTimeDisplay.toString());
console.log(dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a"));
//Populate current day p tage with day, date and time
document.getElementById("currentDay").innerHTML = dateTimeDisplay.format("dddd, MMMM Do YYYY, h:mm a");