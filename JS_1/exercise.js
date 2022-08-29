const dog = {
  name: "Dog",
  legs: 4,
  color: "yellow",
  age: 13,
  bark: function () {
    return this.name + "-" + this.legs + "-" + this.color + "-" + this.age;
  },
};
console.log(dog.bark)