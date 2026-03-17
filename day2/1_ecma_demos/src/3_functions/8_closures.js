// let count = 0;

// function next() {
//     return count += 1;
// }

// setInterval(()=>{
//     console.log(next());
// }, 2000);

// setTimeout(()=>{
//     count = "";
// }, 5000);

// ------------------------------------------------

const next = (function () {
    let count = 0;

    function next() {
        return count += 1;
    }

    return next;
})();

setInterval(() => {
    console.log(next());
}, 2000);