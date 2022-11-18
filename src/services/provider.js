import { CalculatorService } from "./calculator.service";

const previousValues = document.querySelector("#previousValues");
const currentValues = document.querySelector("#currentValues");

export const calculatorService = new CalculatorService(
  previousValues,
  currentValues
);
