const myAsync = async () => {
  const response = await fetch("https://www.randomuser.me/api/?results=50");
  //   let data = await response.json();
  console.log(response);
};
const myFunction = () => {
  myAsync();
};
