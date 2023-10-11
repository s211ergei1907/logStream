function manyChecks() {
  // let a = Math.floor(Math.random() * 20) + 1;
  let a = 15;
  console.log(`a = ${a}`);

  return console.log(
    (a > 10
      ? "a is bigger than 10"
      : "a is less than or equal to 10 " +
        (a === 5 ? "an example of a special case" : "")) +
      (a === 15 ? "but a is not 15" : "") +
      (a > 5
        ? "and a is greater than 5"
        : "and a is less than or equal to 5 ") +
      (a % 2 ? " and a is odd" : " and a is even "),
  );
}

// manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

//второй вариант
let infoAboutA = "";
let a = 15;

if (a > 10) {
  infoAboutA += "a is bigger than 10 ";
  switch (a) {
    case 15:
      infoAboutA += " but a is not 15 ";
  }
  if (a > 5) {
    infoAboutA += " and a is greater than 5 ";
  } else {
    infoAboutA += " and a is less than or equal to 5 ";
  }
  if (a % 2 === 0) {
    infoAboutA += " and a is even ";
  } else {
    infoAboutA += " and a is odd ";
  }
} else {
  if (a <= 10) {
    infoAboutA += "a is less than or equal to 10 ";
    switch (a) {
      case 5:
        infoAboutA += " an example of a special case ";
    }

    if (a > 5) {
      infoAboutA += " and a is greater than 5 ";
    } else {
      infoAboutA += " and a is less than or equal to 5 ";
    }

    if (a % 2 === 0) {
      infoAboutA += " and a is even ";
    } else {
      infoAboutA += " and a is odd ";
    }
  }
}

console.log(infoAboutA);
