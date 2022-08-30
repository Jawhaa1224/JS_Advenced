//reverse uildel ni Array dotor bgaa utguudiig urdaas ni bish hoinoos ni daraaluulhad tusalj ogdog gehdee shuud hoinoos ni bish ehleed boolean utga daraan string tegeed number gej reverse hiideg.

const array1 = ["haha", "hoho", "huhu"];

console.log(
  "Array1 iig reverse hiiged hoinoos ni uragshaa bichej ogj bn" +
    "-" +
    array1.reverse()
);

const array2 = [4, 5, 6];
const array3 = [7, 8, true];
const array = array1.concat(array3, array2);
console.log(
  "concat hiij bazchaad sort hiij daraaluulchaad ihees ni bagruu reverse hiij ogj bn " +
    "-" +
    array.sort().reverse()
);
