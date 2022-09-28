var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate()
      : objToday.getDate(),
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();

var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;

document.querySelector("#date").innerHTML = today;