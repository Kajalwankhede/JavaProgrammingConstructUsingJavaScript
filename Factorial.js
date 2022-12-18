//5. Write a program that computes a factorial of a number taken as input.
//5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

function factorial(n) {

    let result = 1;
    if (n == 0 || n == 1) {
      return result;
    } else {
      for (var i = n; i >= 1; i--) {
        result = result * i;
      }
      return result;
    }
  }
  
  let n = 4;
  result = factorial(n);
  console.log("The factorial of 4 is: ", result);
