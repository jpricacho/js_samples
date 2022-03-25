

// function showMessage(fname,text) {
//     text = text || "No text given";
//     alert(fname + " : " + text);
// };

// showMessage("Patrick");

// function add(num1,num2) {
//     return num1 + num2;
// }

// let sum = add(19,18);

// console.log(sum);

// function confirm(reply) {
//     if (reply == "Yes") {
//         return true;
//     } else if (reply == "No") {
//         return false;
//     }
// }


// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("Do you have permission from your parent?");
//     }
// }

// let yourAge = prompt("How old are you?");

// if (checkAge(yourAge)) {
//     alert("Access granted!");
// } else {
//     alert("Access denied!")
// }

// let sayHello = function() {
//     alert("Hello");
// }

// sayHello();

// let sum = function(num1,num2) {
//     return num1 + num2;
// }

// let add = sum(50,50);

// alert(add);
// sayHello("James");

// let sayHello = function(fname) {
//     alert(`Hello ${fname}`)
// }

// function sayHello(fname) {
//     alert("Hello " + fname)
// };

// let total = (a,b) => a + b;

// alert(total(50,55));
// let number = prompt("Num1");
// let number2 = prompt("Num2");

// let total = () => {
//     a = parseInt(prompt("Num1"));
//     b = parseInt(prompt("num2"));
//     let result = a + b;
//     return result;
// }

// alert(total(number,number2));

const names = ["James", "Zarraga", "Ricacho"];
const table = document.querySelector("#myTable");
const tr = document.createElement("tr");
const td = document.createElement("td");


for (name of names) {
    // let texts = document.createTextNode(name);
    // td.innerHTML = name;
    // tr.appendChild(td);
    // table.appendChild(tr);
    table.insertAdjacentElement(td.innerHTML = name)
}