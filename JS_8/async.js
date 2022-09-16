const myAsync = async () => {
  const response = await fetch("https://www.randomuser.me/api/?results=50");
  const data = await response.json();
  const haha = document.getElementById("fetch");
  data.results.forEach((element) => {
    const list = document.createElement("li");
    list.innerHTML = element.email;
    haha.appendChild(list);
  });
};
myAsync();
