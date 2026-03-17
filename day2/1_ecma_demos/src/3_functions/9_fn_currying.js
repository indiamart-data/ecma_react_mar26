// function greetings(message, name) {
//     console.log(message + ", " + name);
// }

// greetings("Good Morning", "Manish");
// greetings("Good Morning", "Ramakant");
// greetings("Good Morning", "Abhijeet");

// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join("");
// }

// console.log(Converter(" INR", 94.00, 0, 100));
// console.log(Converter(" INR", 94.00, 0, 250));
// console.log(Converter(" INR", 94.00, 0, 699));
// console.log(Converter(" INR", 94.00, 0, 900));

// console.log(Converter(" KM", 1.6, 0, 100));
// console.log(Converter(" KM", 1.6, 0, 250));
// console.log(Converter(" KM", 1.6, 0, 699));
// console.log(Converter(" KM", 1.6, 0, 900));

// -----------------------------------------------

function greetings(message) {
    return function (name) {
        return (message + ", " + name);
    }
}

const mGreet = greetings("Good Morning");

console.log(mGreet("Manish"));
console.log(mGreet("Ramakant"));
console.log(mGreet("Abhijeet"));

function Converter(toUnit, factor, offset) {
    return function (input) {
        return [((offset + input) * factor).toFixed(2), toUnit].join("");
    }
}

const usdToInrConverter = Converter(" INR", 94.00, 0);
console.log(usdToInrConverter(100));
console.log(usdToInrConverter(250));
console.log(usdToInrConverter(699));
console.log(usdToInrConverter(900));

const milesToKmConverter = Converter(" KM", 1.6, 0);
console.log(milesToKmConverter(100));
console.log(milesToKmConverter(250));
console.log(milesToKmConverter(699));
console.log(milesToKmConverter(900));