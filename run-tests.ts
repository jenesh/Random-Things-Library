import fs from "fs";
import { execSync } from "child_process";

const testFilesDir = "./tests";

// Get all test files in the specified directory
const testFiles = fs
  .readdirSync(testFilesDir)
  .filter((file) => file.endsWith(".js"));

// Run each test file using Node.js child process
testFiles.forEach((file) => {
  const command = `node ${testFilesDir}/${file}`;
  execSync(command, { stdio: "inherit" });
});
