import { describe, it, expect, beforeEach } from "vitest";
import { CalculatorService } from "../../../services/calculator.service";

const calculatorService = new CalculatorService("", "");

beforeEach(() => {
  calculatorService.currentOparetionValue = {
    innerText: "",
  };
  calculatorService.previousOparetionValue = {
    innerText: "",
  };
});

describe("Calculator", () => {
  it("should perform a mathematical operation", () => {
    calculatorService.handlerClickEvent({
      target: {
        innerText: "1",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "+",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "1",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "=",
      },
    });
    expect(calculatorService.previousOparetionValue.innerText).to.be.equal(
      "2 +"
    );
  });
  it("should perform a mathematical operation, with a floot number", () => {
    calculatorService.handlerClickEvent({
      target: {
        innerText: "1",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: ".",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "5",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "+",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "1",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "=",
      },
    });
    expect(calculatorService.previousOparetionValue.innerText).to.be.equal(
      "2.5 +"
    );
  });
  it("should change the mathematical operation", () => {
    calculatorService.handlerClickEvent({
      target: {
        innerText: "1",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "+",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "/",
      },
    });
    expect(calculatorService.previousOparetionValue.innerText).to.be.equal(
      "1 /"
    );
  });

  it("should not change the mathematical operation, with invalid operation", () => {
    calculatorService.handlerClickEvent({
      target: {
        innerText: "1",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "+",
      },
    });
    calculatorService.handlerClickEvent({
      target: {
        innerText: "[",
      },
    });
    expect(calculatorService.previousOparetionValue.innerText).to.be.equal(
      "1 +"
    );
  });
});
