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
};

//includes ni Array dotorh bvh utguudiig negen zereg baigaa uguigiin shalgaad baival true utgiig baihgui bol false utgiig ilgeedeg.Includes ni negen zereg bvgdiin shalgadag bolohoor && ashiglahguigeer || ashiglaval 1 ni l zov baihad true utgiig ilgeene.Gehdee heregtei ashiglana || -iig.
const array = Object.keys(users);
const includes = array.includes("Alex" && "Brook" && "Asab");
console.log(includes)

//Filter ni Includees yalgaatain Include bvgdiin negen zereg shalgadag bol Filter 1 1-eer ni shalgaad Baih yum bol ter utgiin oor neg huvisagchruu Array bolgon oruulj ogdog filter deer && ashiglaj shalgaj bolohgui tegeh yum bol hoid taliih ni hed ni Arrayruu nemegdej ogohgui || uyed ali negen bolj bgaa bolohoor tus tusdaa nemegdej bolj bgaa.
const filtered = array.filter((a) => a === "Alex" || "Asab" || "Brook");
console.log(filtered.length);
console.log(filtered);
console.log(filtered.length === 3 ? "manai hed" : "Tanai hed");

const filtereed = array.filter((a) => a === "Alex" && "Asab" && "Brook");
console.log(filtereed);
console.log(filtereed.length);
console.log(filtereed.length === 3 ? "manai hed" : "Tanai hed");

