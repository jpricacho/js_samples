// const fruits = ["Apple", "Banana", "Grapes"];


// for (i=0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits.length);

// const prutas = new Array();
// prutas[0] = "Mangga";
// prutas[1] = "Bayabas";
// prutas[2] = "Mansanas";
// prutas[3] = "Orange";
// prutas[4] = "Melon";

// prutas.sort().reverse();
// console.log(prutas);

// const num = [43,56,13,05,94];

// num.sort(function(a, b) {return a - b});
// console.log(num)


// num.sort((a, b) => {return a - b});
// console.log(num)

// const fruitStr = document.querySelector("#pId");
// let item = "";

// let fruits = (element,index) => {
//     item += index + ":" + element + "<br>";
//     fruitStr.innerHTML = item;
// };

// prutas.forEach(fruits)



// prutas.push("Mangosteen");


// console.log(prutas);
// console.log(prutas.length);

// console.log(prutas.pop());
// console.log(prutas);

// console.log(prutas.shift());
// console.log(prutas);

// console.log(prutas.unshift("Banana", "Pakwan"));
// console.log(prutas);


// const arr = new Array("Guava", {fname:"Patrick"}, true, function () {alert("Hello Array")});

// alert(arr[0]);
// alert(arr[1].fname);
// alert(arr[2]);
// arr[3]();

// const array1 = new Array();
// let index = 0;

// let array2 = "";

// let addElement = () => {
//     let textVal = document.querySelector("#text1").value;
//     array1[index] = textVal;
//     index++
//     textVal = document.querySelector("#text1").value = "";
// };

// let displayArray = () => {
//     for (element of array1) {
//         array2 += `<li>${element}</li>`;
//         document.querySelector("#pId").innerHTML = array2;
//     };
//     array2 = "";
// };

// let str = "test";
// let arr2 = str.split("");
// let arr2 = [1,2,3,4,5]

// console.log(arr2);

// let arr3 = arr2.join("");
// console.log(arr3);

// let numbers = [14,27,36,49];
// console.log(numbers.map((num) => {return num * 2}));

let num2 = [5,28,73,46,99,100,58,55,16,8];
// let sum = [];

// for (i = 0; i < num2.length; i++) {
//     sum[i] = num2[i] + num2[i];
// };

// console.log(num2);
// console.log(sum);

let sum = num2.map((val) => {
    if (val % 2 == 0) {
        return "Even: " +val * 2;
    } else {
        return "Odd: " + val;
    }
});

let res = "";
sum.forEach((val) => {
    res += `<li>${val}</li>`;
    document.querySelector("#pId").innerHTML = res;
})