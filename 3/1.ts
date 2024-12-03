const inputFile = Bun.file("./3/input");
const input = await inputFile.text();

const muls = input.match(/mul\(\d+,\d+\)/g);

let count = 0;
for (const mul of muls!) {
  const one = parseInt(mul.match(/\d+/)![0]);
  const two = parseInt(mul.match(/,\d+/)![0].slice(1));
  const result = one * two;
  count += result;
}

console.log(count);
