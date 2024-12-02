const inputFile = Bun.file("./1/input");
const input = await inputFile.text();

const lines = input.split("\n");

const leftColumn: number[] = [];
const rightColumn: number[] = [];
for (const line of lines) {
  const [left, right] = line.split("   ");
  leftColumn.push(Number(left));
  rightColumn.push(Number(right));
}

let count = 0;
for (let n of leftColumn) {
  count += n * rightColumn.filter((x) => x === n).length;
}

console.log(count);
