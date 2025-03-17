const themeButton = document.querySelector("#theme-btn");
// const themeButton = document.getElementById("theme-btn")

themeButton.innerHTML = "<span>Light </span> Mode";

console.log(themeButton.getAttribute("name"));
// Data attributes in js and html
themeButton.setAttribute("src", "images/profile.png");

const url = "https://kesoru.org/images/kesorulogo.svg";

document.querySelector("img").setAttribute("src", url);
document.querySelector("img").setAttribute("width", "100px");

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
    profilePicture: "https://robohash.org/albert.png",
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
    profilePicture: "https://ui-avatars.com/api/?name=Beatrice",
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
    profilePicture: "https://robohash.org/charles.png",
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
    profilePicture: "https://ui-avatars.com/api/?name=Diana",
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
    profilePicture: "https://robohash.org/edith.png",
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
    height: 5.1,
    profilePicture: "https://ui-avatars.com/api/?name=Felix",
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
    profilePicture: "https://robohash.org/gladys.png",
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
    profilePicture: "https://ui-avatars.com/api/?name=Henry",
  },
];

const profilesDiv = document.getElementById("user-profiles");
console.log(profilesDiv.getAttribute("id"));

people.forEach((person) => {
  let userDiv = document.createElement("div");
  // Template Literals
  userDiv.innerHTML = `
        <img src="${person.profilePicture}" alt="">
        <h3>${person.name}</h3>
        <p> Age: ${person.age} </p>
    `;
  profilesDiv.appendChild(userDiv);
});