let a = Math.floor(Math.random() * 100);

console.log(a);

// console.log(
//   (a > 10 ? a : a * 2) > 5
//     ? 2 * a + 1
//     : (a < 3 ? 1 : 2 * (a - 2)) > 4
//     ? 5
//     : a % 2 == 0
//     ? 6
//     : 7,
// );

if (a > 2) {
  console.log("a больше 2, a = ", 2 * a + 1);
} else {
  switch (a) {
    case 0:
      console.log("6");
      break;
    case 1:
      console.log("7");
      break;
    case 2:
      console.log("6");
      break;
  }
}

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
