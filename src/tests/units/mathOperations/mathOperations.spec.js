import { describe, it, expect } from "vitest";
import { CalculatorService } from "../../../services/calculator.service";

const calculatorService = new CalculatorService("", "");

describe("MathOperations", () => {
  it("should some two values", () => {
    const result = calculatorService.mathOperationHandlers["+"](1, 2);
    expect(result).to.be.equal(3);
  });

  it("should subtract two values", () => {
    const result = calculatorService.mathOperationHandlers["-"](2, 2);
    expect(result).to.be.equal(0);
  });

  it("should divide two values", () => {
    const result = calculatorService.mathOperationHandlers["/"](4, 2);
    expect(result).to.be.equal(2);
  });

  it("should multiply two values", () => {
    const result = calculatorService.mathOperationHandlers["*"](4, 2);
    expect(result).to.be.equal(8);
  });

  it("should not divide two values, with the current zero", () => {
    const result = calculatorService.mathOperationHandlers["/"](4, 0);
    expect(result).to.be.equal(4);
  });

  it("should not divide two values, with the previous zero", () => {
    const result = calculatorService.mathOperationHandlers["/"](0, 4);
    expect(result).to.be.equal(4);
  });

  it("should not multiply two values, with the current zero", () => {
    const result = calculatorService.mathOperationHandlers["/"](4, 0);
    expect(result).to.be.equal(4);
  });

  it("should not multiply two values, with the previous zero", () => {
    const result = calculatorService.mathOperationHandlers["/"](0, 4);
    expect(result).to.be.equal(4);
  });
});
