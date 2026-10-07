// Type Conversion in JavaScript and most common type conversion methods
 let score = "100";
// Convert string to number
let numericScore = Number(score);
console.log(numericScore); // Output: 100

let score2 = "100abc";
// Convert string to number
let numericScore2 = Number(score2);
console.log(numericScore2); // Output: NaN but typeof(numericScore2) will be number

// Convert number to string
let stringScore = String(numericScore);
console.log(stringScore); // Output: "100"

// Convert boolean to string
let isActive = true;
let stringIsActive = String(isActive);
console.log(stringIsActive); // Output: "true"  

// Convert string to boolean
let stringValue = "false";
let booleanValue = Boolean(stringValue);
console.log(booleanValue); // Output: true (non-empty strings are truthy)

// Convert number to boolean
let numericValue = 0;
let booleanNumericValue = Boolean(numericValue);
console.log(booleanNumericValue); // Output: false (0 is falsy)

// Convert boolean to number
let booleanValue2 = false;
let numericBooleanValue = Number(booleanValue2);
console.log(numericBooleanValue); // Output: 0 (false is converted to 0)

// Convert string to array
let stringArray = "Hello, World!";
let arrayFromString = stringArray.split(", ");
console.log(arrayFromString); // Output: ["Hello", "World!"]

// Convert array to string
let array = ["Hello", "World!"];
let stringFromArray = array.join(", ");
console.log(stringFromArray); // Output: "Hello, World!"

// Convert object to string
let obj = { name: "John", age: 30 };
let stringFromObject = JSON.stringify(obj);
console.log(stringFromObject); // Output: '{"name":"John","age":30}'


