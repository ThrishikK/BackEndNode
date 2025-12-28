// ===============================
// Example: Using process.exit()
// ===============================

// This function simulates some work
function doWork() {
  console.log("Doing some work...");

  // Simulate an error
  const error = false; // change to true to simulate error

  if (error) {
    console.log("❌ Error occurred! Exiting...");
    process.exit(1); // Exit the program with error code
  }

  console.log("Work finished successfully!");
  process.exit(0); // Exit with success code
}

// Listen for the process exit event
process.on("exit", (code) => {
  console.log(`⚙️ Process is exiting... Exit code: ${code}`);
});

// Calling the function
doWork();

console.log("This line will NOT run if process.exit() is called above.");
