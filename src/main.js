import { calculatorService } from "./services/provider";

const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculatorService.handlerClickEvent(e);
  });
});
