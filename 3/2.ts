const inputFile = Bun.file("./3/input");
const input = await inputFile.text();

const muls = input.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g);

let count = 0;
let enabled = true;
for (const mul of muls!) {
  if (mul == "do()") enabled = true;
  if (mul == "don't()") enabled = false;
  if (mul.startsWith("mul")) {
    const one = parseInt(mul.match(/\d+/)![0]);
    const two = parseInt(mul.match(/,\d+/)![0].slice(1));
    const result = one * two;
    if (enabled) count += result;
  }
}

console.log(count);
