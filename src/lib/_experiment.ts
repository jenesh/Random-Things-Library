import fs from "fs";

function generateRandomTwoLetterStrings(count: number) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < count; i++) {
    let randomString = "";
    for (let j = 0; j < 10; j++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      randomString += letters[randomIndex];
    }
    result.push(randomString);
  }

  return result;
}

const randomStrings = generateRandomTwoLetterStrings(1000);

fs.writeFile("/somedata.js", JSON.stringify(randomStrings), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
