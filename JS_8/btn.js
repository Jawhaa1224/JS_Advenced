let i = 1;
const myAsync = async () => {
  const response = await fetch("https://www.randomuser.me/api/?results=50");
  const data = await response.json();
  const haha = document.getElementById("fetch");
  const tr = document.createElement("tr");
  const t = document.createElement("tb");
  li.innerHTML = data.results[i].name.first;
  li.innerHTML += " ";
  li.innerHTML += data.results[i].name.last;
  haha.appendChild(li);
  i++;
  console.log(data.results.name);
};
const btn = () => {
  myAsync();
};
