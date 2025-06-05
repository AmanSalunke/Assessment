    class Calculator {
      constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase();
      }

      calculate() {
        switch (this.operation) {
          case "add":
          case "+":
            return this.a + this.b;
          case "subtract":
          case "-":
            return this.a - this.b;
          case "multiply":
          case "*":
            return this.a * this.b;
          case "divide":
          case "/":
            return this.b !== 0 ? this.a / this.b : "Error: Division by zero!";
          default:
            return "Invalid operation!";
        }
      }
    }


    const a = prompt("Enter the first number:");
    const b = prompt("Enter the second number:");
    const operation = prompt("Enter operation (add, subtract, multiply, divide or +, -, *, /):");

    const calc = new Calculator(a, b, operation);
    alert("Result: " + calc.calculate());
