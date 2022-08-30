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
let skill;
let maxskills = 0;

for (i = 0; i < data.length; i++) {
  skill = users[data[i]].skills.length;
  if (maxskills < skill) {
    who = data[i];
    maxskills = skill;
  }
}
console.log(who, maxskills);

for (let i = 0; i < data.length; i++) {
  if(users[data[i]].isLoggedIn === true && users[data[i]].points === 50){
    console.log(data[i]);
  }
}

for (let i = 0; i < data.length; i++) {
    const filtered = users[data[i]].skills.filter((a)=> a === "MongoDB" || a=== "Express" || a=== "React" || a=== "Node");
    filtered.length === 4 ? console.log(data[i]):i+=0;
}

const Jawkhlan = {
    Jawkhlan:{
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
    }
}
const a = Object.assign(Jawkhlan,users);
console.log(a);