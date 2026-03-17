// function test1() {
//     console.log(this);
// }

// test1();

// const test2 = function () {
//     console.log(this);
// }

// test2();

// const test3 = () => {
//     console.log(this);
// }

// test3();

// // ---------------------------------------------------------

// var person = {
//     age: 0,
//     grow: function () {
//         // console.log(this);
//         this.age += 1;
//         console.log(this.age);
//     }
// };

// // person.grow();
// // person.grow();
// // person.grow();

// // setInterval(person.grow, 2000);
// setInterval(person.grow.bind(person), 2000);

// // ---------------------------------------------

// let p1 = {
//     id: 1,
//     name: "Manish",
//     toJson: function() {
//         console.log(JSON.stringify(this));
//     }
// }

// let p2 = {
//     id: 2,
//     name: "Abhijeet",
//     city: "Pune",
//     toJson: function() {
//         console.log(JSON.stringify(this));
//     }
// }

// p1.toJson();
// p2.toJson();

const toJson = function () {
    console.log(JSON.stringify(this));
}

let p1 = {
    id: 1,
    name: "Manish"
}

let p2 = {
    id: 2,
    name: "Abhijeet",
    city: "Pune"
}

// toJson.call(p1);
// toJson.call(p2);

p1.toJson = toJson.bind(p1);
p2.toJson = toJson.bind(p2);

p1.toJson();
p2.toJson();