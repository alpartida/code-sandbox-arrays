// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(weekDays);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[(0, 6)]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6] = "Funday";

// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays.splice(0, 1);
console.log(weekDays);
weekDays.splice(0, 1);
console.log(weekDays);

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
function temperature(weekday) {
  console.log(`Temperature on ${weekday} is 18 degrees`);
}
weekDays.forEach(temperature);
