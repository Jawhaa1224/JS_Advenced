// Assign uildel ni 2 object-iig neg utga ruu chihej hiij ogdog.harj baigaagar chin 2 utga oruulj baihad ehelj bichseniihan utga deed taldaa garj bgaa gehdee 2 object d adilkhan key baih yum bol svvld bichsen object iihan key utgiig oruulj ogdog.

const person={
    name:"jawhaa",
    age:16,
}
const skills={
    softskill:['teamwork',"speech"],
    age:17,
    hardskill:["HTML",'CSS',"js"],
    framework:['bootstrap',"mui"],
}
const fullData = Object.assign(skills,person);
console.log(fullData);