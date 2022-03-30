// const fruits = ["Apple", "Banana", "Grapes"];


// for (i=0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits.length);

const prutas = new Array();
prutas[0] = "Mangga";
prutas[1] = "Bayabas";
prutas[2] = "Mansanas";
prutas[3] = "Orange";
prutas[4] = "Melon";

prutas.push("Mangosteen");


console.log(prutas);
console.log(prutas.length);

console.log(prutas.pop());
console.log(prutas);

console.log(prutas.shift());
console.log(prutas);

console.log(prutas.unshift("Banana", "Pakwan"));
console.log(prutas);


// const arr = new Array("Guava", {fname:"Patrick"}, true, function () {alert("Hello Array")});

// alert(arr[0]);
// alert(arr[1].fname);
// alert(arr[2]);
// arr[3]();