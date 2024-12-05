const inputFile = Bun.file("./4/input");
const input = await inputFile.text();

let count = 0;

let oneback: string[] = [];
let twoback: string[] = [];
let threeback: string[] = [];

for (const line of input.split("\n")) {
  const current = line.split("");

  for (let i = 0; i < current.length; i++) {
    const diagonal1 = `${current[i]}${oneback[i - 1]}${twoback[i - 2]}`;
    const diagonal2 = `${current[i - 2]}${oneback[i - 1]}${twoback[i]}`;

    if (
      (diagonal1 == "MAS" || diagonal1 == "SAM") &&
      (diagonal2 == "MAS" || diagonal2 == "SAM")
    )
      count++;
  }

  threeback = twoback;
  twoback = oneback;
  oneback = current;
}

console.log(count);
