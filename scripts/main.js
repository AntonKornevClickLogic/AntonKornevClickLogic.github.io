let objToday = new Date();

weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

curMonth = months[objToday.getMonth()];
curYear = objToday.getFullYear();
dayOfWeek = weekday[objToday.getDay()];
dayOfMonth = (objToday.getDate() < 10)
  ? '0' + objToday.getDate()
  : objToday.getDate();

let tomorrow = new Date();
tomorrow.setDate(objToday.getDate() + 1);

nextMonth = months[tomorrow.getMonth()];
nextYear = tomorrow.getFullYear();
nextDayOfWeek = weekday[tomorrow.getDay()];
nextDayOfMonth = (tomorrow.getDate() < 10)
  ? '0' + tomorrow.getDate()
  : tomorrow.getDate();

const today = dayOfWeek + ', ' + curMonth + ' ' + dayOfMonth + ', ' + curYear;
let nextDay = `${nextDayOfMonth} ${nextMonth}, ${nextYear}`;

document.querySelector('#date').innerHTML = today;
const nextDaySelectors = document.querySelectorAll('.next-day');

for (let item in nextDaySelectors) {
  console.log(nextDaySelectors[item]);
  nextDaySelectors[item].innerHTML = nextDay;
}