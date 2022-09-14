const myFunction = () => { 
let willIGetNewPhone = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isMomHappy = Math.round(Math.random());
    if (isMomHappy) {
      let Phone = {
        brand: "iphone",
        color: "purple",
      };
      resolve(Phone);
    } else {
      let reason = new Error("mom is not happy");
      reject(reason);
    }
  }, 1000);
});
const askMom = () => {
  return willIGetNewPhone
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => {
      console.log(reject);
    });
};
console.log("asking:", askMom());
}