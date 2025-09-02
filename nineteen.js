function evaluatePostfix(expression) {
  let stack = [];
  let tokens = expression.split(" ");

  for (let token of tokens) {
    if (!isNaN(token)) {
      
      stack.push(parseInt(token));
    } else {
      
      let b = stack.pop();
      let a = stack.pop();

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  }

  return stack.pop();
}

let expression = "2 1 + 3 *";
console.log(evaluatePostfix(expression)); 
