let candidates = ["Alice", "Bob", "Charlie"];
let i = 1; // Index 1 (second element)
let candidate = "Eve";

candidates[i] = candidate; // Assigns "Eve" to the second element of the array

console.log(candidates); // Output: ["Alice", "Eve", "Charlie"]
