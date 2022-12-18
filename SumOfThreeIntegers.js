//4. Write a Program to show Sum of three Integer adds to ZERO

let numbers = [0,-1,2,-3,1];
for (let i = 0; i < numbers.length - 2; i++) // for taking first number
{
  for (let j = i + 1; j < numbers.length-1; j++) 
  {
    for (let k = j + 1; k < numbers.length; k++) 
	{
      let sum = numbers[i] + numbers[j] + numbers[k];
      if (sum == 0) {
        console.log(numbers[i] + " " + numbers[j] + " " + numbers[k]);
      }
    }
  }
}
