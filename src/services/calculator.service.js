export class CalculatorService {
  mathOperationList = ["-", "+", "*", "/"];
  calcOperationList = ["DEL", "CE", "C", "="];
  mathOperationHandlers = {
    "+": (previous, current) => previous + current,
    "-": (previous, current) => previous - current,
    "/": (previous, current) => this.subOperation(previous, current),
    "*": (previous, current) => this.multiOperation(previous, current),
  };

  constructor(previousOparetionValue, currentOparetionValue) {
    this.previousOparetionValue = previousOparetionValue;
    this.currentOparetionValue = currentOparetionValue;
    this.currentValue = "";
  }

  handlerClickEvent(event) {
    const value = event.target.innerText;
    if (+value >= 0 || value === ".") {
      this.handlerAddValue(value);
    } else {
      this.handlerOperation(value);
    }
  }

  handlerChangeOperation(operation) {
    if (this.currentOparetionValue.innerText === "" && operation !== "C") {
      if (this.previousOparetionValue.innerText !== "") {
        this.changeOparetion(operation);
      }
      return;
    }
  }

  handlerOperation(operation) {
    this.handlerChangeOperation(operation);

    let operationValue;
    let previous = +this.previousOparetionValue.innerText.split(" ")[0];
    let current = +this.currentOparetionValue.innerText;

    this.processOperation(operation, operationValue, previous, current);
  }

  processOperation(operation, operationValue, previous, current) {
    if (this.mathOperationList.includes(operation)) {
      operationValue = this.mathOperationHandlers[operation](previous, current);
      this.handlerUpdateValues(operationValue, operation, previous, current);
    } else if (this.calcOperationList.includes(operation)) {
      this.calcOperationHandlers(operation);
    }
  }

  calcOperationHandlers(operation) {
    switch (operation) {
      case "DEL":
        this.deleteOperation();
        break;
      case "CE":
        this.clearCurrentOperation();
        break;
      case "C":
        this.clearAllOperation();
        break;
      case "=":
        this.resultOperation();
        break;
      default:
        break;
    }
  }

  changeOparetion(operation) {
    if (!this.mathOperationList.includes(operation)) return;

    this.previousOparetionValue.innerText =
      this.previousOparetionValue.innerText.slice(0, -1) + operation;
  }

  handlerAddValue(value) {
    if (
      value !== "." ||
      (value === "." && !this.currentOparetionValue.innerText.includes("."))
    ) {
      this.currentValue = value;
      this.handlerUpdateValues();
    }
  }

  handlerUpdateValues(operationValue, operation, previous, current) {
    if (!operationValue) {
      this.currentOparetionValue.innerText += this.currentValue;
    } else {
      if (previous === 0) {
        operationValue = current;
      }
      this.previousOparetionValue.innerText = `${operationValue} ${operation}`;
      this.currentOparetionValue.innerText = "";
    }
  }

  subOperation(previous, current) {
    if (previous === 0) return current;
    if (current === 0) return previous;
    return previous / current;
  }

  multiOperation(previous, current) {
    if (previous === 0) return current;
    if (current === 0) return previous;
    return previous * current;
  }

  deleteOperation() {
    this.currentOparetionValue.innerText =
      this.currentOparetionValue.innerText.slice(0, -1);
  }

  clearCurrentOperation() {
    this.currentOparetionValue.innerText = "";
  }

  clearAllOperation() {
    this.currentOparetionValue.innerText = "";
    this.previousOparetionValue.innerText = "";
  }

  resultOperation() {
    const operation = this.previousOparetionValue.innerText.split(" ")[1];
    this.handlerOperation(operation);
  }
}
