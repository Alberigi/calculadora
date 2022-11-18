import { describe, it, expect } from "vitest";
import { CalculatorService } from "../../../services/calculator.service";

const calculatorService = new CalculatorService("", "");

describe("CalcOperations", () => {
  it("should delete a digit from the current value", () => {
    calculatorService.currentOparetionValue = {
      innerText: "123",
    };
    const result = calculatorService.calcOperationHandlers("DEL");
    expect(result).to.be.equal("12");
  });

  it("should clear current value", () => {
    calculatorService.currentOparetionValue = {
      innerText: "123",
    };
    const result = calculatorService.calcOperationHandlers("CE");
    expect(result).to.be.equal("");
  });

  it("should clear all value", () => {
    calculatorService.currentOparetionValue = {
      innerText: "123",
    };
    calculatorService.previousOparetionValue = {
      innerText: "123",
    };
    const { current, previous } = calculatorService.calcOperationHandlers("C");
    expect(previous).to.be.equal("");
    expect(current).to.be.equal("");
  });

  it("should perform the mathematical operation", () => {
    calculatorService.currentOparetionValue = {
      innerText: "100",
    };
    calculatorService.previousOparetionValue = {
      innerText: "100 +",
    };
    const result = calculatorService.calcOperationHandlers("=");
    expect(result).to.be.equal("200 +");
  });
});
