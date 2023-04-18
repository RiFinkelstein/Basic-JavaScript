function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    // Check for invalid input (negative or zero values)
    return "Error: Base and height must be positive numbers.";
  } else {
    // Calculate area of the triangle
    return 0.5 * base * height;
  }
}

let base = 5;
let height = 10;
let area = calculateTriangleArea(base, height);
console.log(area); // Outputs: 25
