/* let timerId = setInterval(() => console.log('tick'), 1000);
setTimeout(()=> {clearInterval(timerId); console.log('break')}, 5000) */
let i = 1;

function func(element) {
    console.log(element);
}

setInterval(function () {
    func(i);
}, 100);

let j = 1;

setTimeout(function run() {
    func(j + 1);
    setTimeout(run, 100);
}, 100);