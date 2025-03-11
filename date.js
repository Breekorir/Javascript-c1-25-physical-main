//console.log(new Date().toLocaleDateString());
//console.log(new Date().toLocaleTimeString());
//Use intl.datetimeformat to get the time zone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

console.log("Time Zone:", timeZone);

//knowin clients/users timezone
//const Date = new Date();

//formating time and dates using date object.

const recievedDate = new Date("01/03/2025")
console.log(recievedDate.getFullYear());
console.log(recievedDate.getMonth());//0 january-11 December
console.log(recievedDate.getDate());//1
console.log(recievedDate.getDay());//day of the week from 0 sunday t0 6 january

