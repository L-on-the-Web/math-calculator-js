const display = document.querySelector("#display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const percent = document.querySelector(".percent");
const decimalPoint = document.querySelector(".decimal-point");

const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

numbers.forEach((n) => {
   n.addEventListener("click", (n) => {
      let nValue = n.target.dataset.num;
      if (nValue !== undefined) {
         display.value += nValue; //appends value to display
      }
   });
});

percent.addEventListener("click", (p) => {
   let pValue = p.target.dataset.fractoral;
   if (pValue !== undefined) {
      display.value += pValue;
   }
});

decimalPoint.addEventListener("click", (d) => {
   let dValue = d.target.dataset.fractoral;
   if (dValue !== undefined) {
      display.value += dValue;
   }
});

operators.forEach((o) => {
   o.addEventListener("click", (o) => {
      let oValue = o.target.dataset.op;
      if (oValue !== undefined) {
         display.value += oValue; //appends value to display
      }
   });
});

equal.addEventListener("click", (e) => {
   if (display.value === "") {
      display.value = "Please Enter";
   } else {
      try {
         let answer = eval(display.value); //evaluates expression in display
         display.value = answer;
      } catch (error) {
         display.value = "Error";
      }
   }
});

clear.addEventListener("click", (c) => {
   display.value = "";
});