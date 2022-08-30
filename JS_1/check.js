//Ene uildel ni object dotor tiim key bn uu gej shalgaad data yumuu oor neg value ruu boolean utga ilgeedeg baival true baihgui bol false

const person = {
    name: "jawhaa",
    age: 16,
  };
  const skills = {
    softskill: ["teamwork", "speech"],
    age: 17,
    hardskill: ["HTML", "CSS", "js"],
    framework: ["bootstrap", "mui"],
  };
  const data = skills.hasOwnProperty("hardskill");
  console.log(data);
  