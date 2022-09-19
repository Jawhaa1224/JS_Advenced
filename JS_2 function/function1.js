const student = (grade) => {
  return grade < 0 || grade > 100
    ? "error"
    : grade == 100
    ? "Perfect"
    : grade > 89
    ? "you  got A"
    : grade > 79
    ? "you  got B"
    : grade > 69
    ? "you  got C"
    : grade > 59
    ? "you  got D"
    : "you got Failed";
};
console.log(student(54));