const inputFile = Bun.file("./2/input");
const input = await inputFile.text();

const lines = input.split("\n");

let count = 0;
for (const line of lines) {
  const numbers = line.split(" ").map(Number);
  let valid = true;
  console.log(numbers);
  let direction = 0;
  for (let i = 1; i < numbers.length; i++) {
    let thisdirection = numbers[i] - numbers[i - 1] > 0 ? 1 : -1;
    if (direction === 0) direction = thisdirection;
    if (direction !== thisdirection) valid = false;
    if (Math.abs(numbers[i] - numbers[i - 1]) < 1) valid = false;
    if (Math.abs(numbers[i] - numbers[i - 1]) > 3) valid = false;
  }
  if (valid) count++;
}

console.log(count);
