const operators = prompt(
  "Input operation you'll like to perrform: '+'  is addition, '-'  is subtraction, '*'  is multiplication, '/'  is division "
);

const chars = ["+", "-", "*", "/"];

for (let i = 0; i < chars.length; i++) {
  if (operators === chars[i]) {
    let num1 = parseInt(prompt("Input first Number: "));
    let num2 = parseInt(prompt("Input second Number: "));

    if (operators === "+") {
      alert(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operators === "-") {
      alert(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (operators === "*") {
      alert(`${num1} x ${num2} = ${num1 * num2}`);
    } else if (operators === "/") {
      alert(`${num1} / ${num2} = ${num1 / num2}`);
    }
  }
}
