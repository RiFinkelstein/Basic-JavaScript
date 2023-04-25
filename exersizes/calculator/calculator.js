// Calculator functions
function calculator() {
    // Get input values
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const operator = document.getElementById("operator").value;

    // Perform calculation
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = num1 / num2;
            }
            break
        default:
            result = "Error: Invalid operator";
    }

    // Display result
    document.getElementById("result").innerHTML = result;
}
