const myFunction = () => {
  const willILendMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
      let bankContact = Math.round(Math.random);
      if (bankContact) {
        let heleh = {
          yuAvah: "mashin",
          yuAvah: "bair",
          toloh: "or",
        };
        resolve(heleh);
      } else {
        let medreh = {
          emotional:"sad",
          yahu:"uuy",
        };
        reject(medreh);
      }
    }, 1500);
  });
  const wait = () => {
    return willILendMoney
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };
  console.log("calling" + wait);
};
