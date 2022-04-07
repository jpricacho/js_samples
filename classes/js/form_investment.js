
const form = document.forms.calculator;
const initialAmount = document.querySelector("#initialAmount");
const withInterest = document.querySelector("#withInterest");
const heightInterest = document.querySelector("#height-interest");

let val = +form.money.value;
initialAmount.textContent = val.toLocaleString("en-US");


let getValue = () => {
    let moneyValue = +form.money.value;
    let interestValue = +form.interest.value;
    let monthsValue = +form.months.value;
    initialAmount.textContent = moneyValue.toLocaleString("en-US");
    if (!moneyValue || !interestValue || !monthsValue) {
        return
    };
    let intPercent = interestValue * 0.01;
    let monthsVal2 = monthsValue / 12;
    let result = ((moneyValue * intPercent) * monthsVal2) + moneyValue;
    withInterest.textContent = result.toLocaleString("en-US");
    let height = ((100 / moneyValue) * result) + "px";
    heightInterest.style.height = height;  
};

form.money.oninput = getValue;
form.months.onchange = getValue;
form.interest.oninput = getValue;

