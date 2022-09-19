let NumbeR;
let whatnumber = new Promise((resolve, reject) => {
  let number = parseInt(Math.random() * 3);
  console.log(number);
  if (isNaN(number)) {
    resolve("err");
  } else if (number / 2 !== 1) {
    setTimeout(() => {
      reject("odd");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("even");
    }, 2000);
  }
});
const too = () => {
  return whatnumber
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => {
      console.log(reject);
    });
};
const text = async () => {
  const value = await too();
  console.log("Your number is" + value);
};
text();
