// const myAsync = async () => {
//   const response = await fetch("https://www.randomuser.me/api/?results=50");
//   const data = await response.json();
//   const haha = document.getElementById("fetch");
//   data.results.forEach((element) => {
//     const list = document.createElement("li");
//     list.innerHTML = element.email;
//     haha.appendChild(list);
//   });
// };
// myAsync();
var myList1 = [4, 8, 9, 1, 3, 10]
var myList2 = ['c', 'b', 'a', 'ac', 'ab', 'bc', 'ba']

myList1.sort()
myList2.sort()

console.log(myList1) // [1, 10, 3, 4, 8, 9]
console.log(myList2) // ['a', 'ab', 'ac', 'b', 'ba', 'bc', 'c']