function calculate(expression) {
  let stack = [];
  let num = 0;
  let operator = '+';

  expression = expression.replace(/\s+/g, ''); // remove spaces

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    }


    if (isNaN(char) || i === expression.length - 1) {
      if (operator === '+') {
        stack.push(num);
      } else if (operator === '-') {
        stack.push(-num);
      } else if (operator === '*') {
        stack.push(stack.pop() * num);
      } else if (operator === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }

      operator = char;
      num = 0;
    }
  }

  return stack.reduce((sum, val) => sum + val, 0);
}


let input = "3 + 5 * 2 - 4 / 2";
console.log(calculate(input)); // Output: 11