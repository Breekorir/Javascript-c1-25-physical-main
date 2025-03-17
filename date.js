const age = "nine" / 80;

console.log(Number.isNaN(age));
console.log(age);

// NaN

console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());

// Knowing users/clients timezone
const date = new Date();

// Use Intl.DateTimeFormat to get the time zone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log("Time Zone:", timeZone); // Africa/Nairobi

// Formating dates and time using Date object.

// 12-03-2025
// Tue 03rd March 25
// month - date - year
const recievedDate = new Date("03/08/2025");

console.log(recievedDate.getFullYear());
console.log(recievedDate.getMonth()); // 0 january - 11 December
console.log(recievedDate.getDate()); // 1....
console.log(recievedDate.getDay()); // Day of the week from 0 sunday to 6 saturday

// Intl Object formating dates, currencies ....
console.log(new Intl.DateTimeFormat("en-GB").format(recievedDate));

// web scrapping jumaya.co.ke
[
  { name: "radio", price: 500 },
  { name: "radio", price: 500 },
  { name: "radio", price: 500 },
];
// DOM
