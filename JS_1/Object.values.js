//values geed vildel ni object dotorh 1 key iin utga iig 1 arrayd hiij ogno key vvdiin avahguigeer objectiin bvh value-g 1 arrayd hiij ogno.

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
  const data = Object.values(skills);
  const value = data[2][1]
  console.log(value);
  