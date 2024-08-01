// Example usage assuming def.array is true and value is [1, 2, 3]
def.array = true;

function isSignal(val) {
    // Example of isSignal function logic
    return val === 'signal';
}

function parameterValue(def, v, scope) {
    // Example implementation of parameterValue function
    return v * 2; // Doubles each value
}

let value = [1, 2, 3];
let scope = {}; // Example scope object

let result = def.array && !isSignal(value) 
    ? value.map(v => parameterValue(def, v, scope)) 
    : parameterValue(def, value, scope);

console.log(result); // Output: [2, 4, 6]
