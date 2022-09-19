const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const data = Object.keys(users);
let maxskills = 0;
let j;
let who;

for(i=0;i<data.length;i++){
  j = ((users[data[i]].skills.length));
  if(maxskills < j){
    who = data[i];
    maxskills = j;
  }
}
console.log(who , maxskills);

for(i=0;i<data.length;i++){
  j = ((users[data[i]].points));
  if(j === 50 && users[data[i]].isLoggedIn == true){
    console.log(data[i]); ;
  }
}

for (i = 0; i < data.length; i++) {
    if (users[data[i]].skills.includes("MongoDB", "Express", "React", "Node")) {
     console.log(data[i]);
    }
}

const Jawkhlan = {
  Jawkhlan: {
    email: "jawkhlan626@gmail.com",
    skills: "HTML,CSS,HalfHalfHalfBootstrap,TailwindCSS",
    age: 17,
    isLoggedIn: false,
    points: 40,
  },
};
const users1 = Object.assign(users, Jawkhlan);
console.log(users1);

let Keys = Object.keys(users1);
console.log(Keys);

let Values = Object.values(users1);
console.log(Values);