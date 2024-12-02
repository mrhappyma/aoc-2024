const inputFile = Bun.file("./2/input");
const input = await inputFile.text();

const lines = input.split("\n");

let count = 0;
for (const line of lines) {
  const numbers = line.split(" ").map(Number);
  if (test(numbers)) {
    count++;
    continue;
  }

  for (let i = 0; i < numbers.length; i++) {
    const newNumbers = [...numbers];
    newNumbers.splice(i, 1);
    if (test(newNumbers)) {
      count++;
      break;
    }
  }
}

function test(numbers: number[]) {
  let direction = 0;
  for (let i = 1; i < numbers.length; i++) {
    let thisdirection = numbers[i] - numbers[i - 1] > 0 ? 1 : -1;
    if (direction === 0) direction = thisdirection;
    if (direction !== thisdirection) return false;
    if (Math.abs(numbers[i] - numbers[i - 1]) < 1) return false;
    if (Math.abs(numbers[i] - numbers[i - 1]) > 3) return false;
  }
  return true;
}

console.log(count);
