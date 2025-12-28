// ======================================
// Example: Accessing Command-Line Args
// ======================================

// process.argv is an array of command-line arguments
console.log("Raw process.argv:", process.argv);

// Extract arguments (skip first 2)
// process.argv[0] = path to NodeJS executable
// process.argv[1] = path to current file
// process.argv[2] = first real argument
// process.argv[3] = second argument ... etc.
const args = process.argv.slice(2);

console.log("User-provided arguments:", args);

// Example: Using arguments
if (args.length === 0) {
  console.log("❗ No arguments provided!");
  process.exit(0);
}

const name = args[0];
const age = args[1];

console.log(`👋 Hello ${name}! You are ${age} years old.`);

// Optional: handle missing values
if (!age) {
  console.log("⚠ Age not provided.");
}

// 🧪 Run it like this
// node args-demo.js Thrishik 20
