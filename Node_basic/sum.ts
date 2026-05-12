function sum(num1:num,num2:num)
{
  return num1+num2;
}
console.log(sum(8,9));
const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
}

const divide = (num1: number, num2: number): number => {
  if (num2 === 0) throw new Error("Can't divide by zero");
  return num1 / num2;
}

const subtract = (num1: number, num2: number): number => {
  return num1 - num2;
}

// Test them
console.log(multiply(8, 9));  // 72
console.log(divide(18, 2));   // 9  
console.log(subtract(8, 9));  // -1
console.log(sum(8,9));
