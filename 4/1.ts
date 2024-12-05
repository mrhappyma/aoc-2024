const inputFile = Bun.file("./4/input");
const input = await inputFile.text();

let count = 0;

const forward = input.match(/XMAS/g);
const backward = input.match(/SAMX/g);
count += forward!.length;
count += backward!.length;

let oneback: string[] = [];
let twoback: string[] = [];
let threeback: string[] = [];

for (const line of input.split("\n")) {
  const current = line.split("");

  for (let i = 0; i < current.length; i++) {
    if (`${current[i]}${oneback[i]}${twoback[i]}${threeback[i]}` === "XMAS")
      count++;

    if (`${current[i]}${oneback[i]}${twoback[i]}${threeback[i]}` === "SAMX")
      count++;

    // diagonals
    if (
      `${current[i]}${oneback[i - 1]}${twoback[i - 2]}${threeback[i - 3]}` ===
      "XMAS"
    )
      count++;

    if (
      `${current[i]}${oneback[i + 1]}${twoback[i + 2]}${threeback[i + 3]}` ===
      "XMAS"
    )
      count++;

    if (
      `${current[i]}${oneback[i - 1]}${twoback[i - 2]}${threeback[i - 3]}` ===
      "SAMX"
    )
      count++;

    if (
      `${current[i]}${oneback[i + 1]}${twoback[i + 2]}${threeback[i + 3]}` ===
      "SAMX"
    )
      count++;
  }

  threeback = twoback;
  twoback = oneback;
  oneback = current;
}

console.log(count);
