// almost everything in javascript is an object

let car = {
    brand: "Toyota",
    model: "Probox",
    yom: 2018,
    isKenyanUsed: false,
    mileage: 23005,
    colors: ["white", "green","orange"]
}

// accessing data in an object
// e.g. log the year of make for this car

console.log(car.yom); // using the dot notation - 2018

// log the second color of the car -- green


const people = [
    {
      name: "Albert Kipchirchir Melly",
      age: 50,
      isKenyan: true,
      schools: ["Meteitei", "JKUAT", "MKU"],
      work: {
        company: "Eldohub",
        role: "Instructor",
        since: 2022,
      },
      siblings: [
        { name: "Alex", age: 31 },
        { name: "Alfred", age: 25 },
        { name: "Allan", age: 29 },
      ],
      height: 5.9,
    },
    {
      name: "Beatrice",
      age: 35,
      isKenyan: false,
      schools: ["Hillcrest", "Moi University"],
      work: {
        company: "Technovation",
        role: "Software Engineer",
        since: 2018,
      },
      siblings: [],
      height: 5.5,
    },
    {
      name: "Charles",
      age: 42,
      isKenyan: true,
      schools: ["Maranda", "University of Nairobi"],
      work: {
        company: "Acme Corporation",
        role: "Manager",
        since: 2015,
      },
      siblings: [
        { name: "Christine", age: 38 },
        { name: "Caleb", age: 35 },
      ],
      height: 6.1,
    },
    {
      name: "Diana",
      age: 18,
      isKenyan: false,
      schools: ["St. Mary's", "Strathmore University"],
      work: {
        company: "FinTech Ltd",
        role: "Data Analyst",
        since: 2020,
      },
      siblings: [{ name: "David", age: 30 }],
      height: 5.7,
    },
    {
      name: "Edith",
      age: 65,
      isKenyan: true,
      schools: ["Ki̅rei", "Egerton University"],
      work: {
        company: "Retired",
        role: "Teacher",
        since: 1980,
      },
      siblings: [],
      height: 5.4,
    },
    {
      name: "Felix",
      age: 19,
      isKenyan: true,
      schools: ["Butere", "Maseno University"],
      work: {
        company: "Freelancer",
        role: "Web Developer",
        since: 2023,
      },
      siblings: [{ name: "Fiona", age: 17 }],
      height: 5.10,
    },
    {
      name: "Gladys",
      age: 48,
      isKenyan: false,
      schools: ["Loreto", "Kenyatta University"],
      work: {
        company: "Hospital",
        role: "Doctor",
        since: 2000,
      },
      siblings: [
        { name: "George", age: 52 },
        { name: "Gloria", age: 45 },
      ],
      height: 5.8,
    },
    {
      name: "Henry",
      age: 32,
      isKenyan: true,
      schools: ["Nyandarua", "University of Eldoret"],
      work: {
        company: "Government",
        role: "Lawyer",
        since: 2019,
      },
      siblings: [],
      height: 6.2,
    },
  ];
// JSON
  
//   print/log the work place for the thrid person

// log the name of Felix's sibling
// const felix = people.find((person)=>person.name==="Felix")
console.log(people[5].siblings[0].name)
// log the second school that Diana went to
// the age of the youngest person
console.log(people[3].age);
// log the number of Glady's siblings   


function findYoungestPerson(peopleList){
    let youngestAge = peopleList[0].age // an assuptiom - first person in the list is the younges
    for(let index=1;index<peopleList.length;index++){
        if(peopleList[index].age<youngestAge){ // if current person in the loop is younger -- update youngestAge
          youngestAge = peopleList[index].age
        }
    }
    console.log( youngestAge );
    // const youngestPerson =  peopleList.find(person=>person.age===youngestAge).name
    // console.log(youngestPerson);
}
findYoungestPerson(people)


const username = "kipchirchir"

// String --- propteries -- .legnth

console.log(  username.endsWith("k") );
console.log(  username.endsWith("r") );
console.log(  username.toUpperCase() );
console.log(  username.charAt(0) );

console.log( username.replace("kip", "chep") );

const price = 900.87844832239293
console.log( price.toFixed(2) );
//  Number
// JS global objects --- String, Number, Array, Object, Math, Date ........ provide properties and methods(functions) to help manipulate data

const colors = ["red", "green"]
 colors.push("yellow") 
console.log(colors);
console.log( colors.reverse() );
console.log(colors.indexOf("green"));


