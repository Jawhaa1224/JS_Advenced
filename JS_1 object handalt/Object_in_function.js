// Key deer function duudaj oghoor daraan objectiinhoo function duudhad ter uildel eder ni hiigdtsen garj irne gej oilgoson.

const person = {
  name: "Bayrjavkhlan",
  age: 17,
  ismale: true,
  getFullFormattedData: function () {
    console.log(this.name, "-", this.age, "-", this.ismale ? "eregtei" : "emegtei");
  },
};
person.getFullFormattedData();