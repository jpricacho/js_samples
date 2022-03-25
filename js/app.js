// let number = prompt("Enter Number:")

// function printNum (num) {
//     for (i = 1; i <= num; i++) {
//         document.write(i + "<br>");
//     }
// }

// let printNum = function(num) {
//     for (i = 1; i <= num; i++) {
//         document.write(i + "<br>");
//     }
// }

// let printNum = (num) => {
//     for (i = 1; i <= num; i++) {
//         document.write(i + "<br>");
//     }
// }

// printNum(number)


const valueDate = new Date();
let valueMinutes = valueDate.getMinutes();
let valueSeconds = valueDate.getSeconds();
let greeting;
let ampm;

function timeDate(valueHours) {
    if (valueHours > 4 && valueHours < 12) {
        greeting = "Good Morning!";
        ampm = "AM"
    } else if (valueHours >= 12 && valueHours < 20) {
        greeting = "Good Afternoon!";
        ampm = "PM"
    } else {
        greeting = "Good Evening!"
        ampm = "PM"
    };

    if (valueHours < 10) {
        valueHours = "0" + valueHours;
    } else if (valueMinutes < 10) {
        valueMinutes = "0" + valueMinutes;
    }else if (valueSeconds < 10) {
        valueSeconds = "0" + valueSeconds;
    };

    document.querySelector("#time").innerHTML = `${greeting} it is ${valueHours}:${valueMinutes}:${valueSeconds}:${ampm}`;    
}

// let timeDate = function(valueHours) {
//     if (valueHours > 4 && valueHours < 12) {
//         greeting = "Good Morning!";
//         ampm = "AM"
//     } else if (valueHours >= 12 && valueHours < 20) {
//         greeting = "Good Afternoon!";
//         ampm = "PM"
//     } else {
//         greeting = "Good Evening!"
//         ampm = "PM"
//     };

//     if (valueHours < 10) {
//         valueHours = "0" + valueHours;
//     } else if (valueMinutes < 10) {
//         valueMinutes = "0" + valueMinutes;
//     }else if (valueSeconds < 10) {
//         valueSeconds = "0" + valueSeconds;
//     };

//     document.querySelector("#time").innerHTML = `${greeting} it is ${valueHours}:${valueMinutes}:${valueSeconds}:${ampm}`;
// }

// let timeDate = (valueHours) => {
//     if (valueHours > 4 && valueHours < 12) {
//         greeting = "Good Morning!";
//         ampm = "AM"
//     } else if (valueHours >= 12 && valueHours < 20) {
//         greeting = "Good Afternoon!";
//         ampm = "PM"
//     } else {
//         greeting = "Good Evening!"
//         ampm = "PM"
//     };

//     if (valueHours < 10) {
//         valueHours = "0" + valueHours;
//     } else if (valueMinutes < 10) {
//         valueMinutes = "0" + valueMinutes;
//     }else if (valueSeconds < 10) {
//         valueSeconds = "0" + valueSeconds;
//     };

//     document.querySelector("#time").innerHTML = `${greeting} it is ${valueHours}:${valueMinutes}:${valueSeconds}:${ampm}`;
// }





timeDate(valueDate.getHours())

//If you want to page to reload every second :)

// setTimeout(() => {
//     window.location.reload();
// }, 1000);
