/* function printNumbers(from, to){
    let current = from;
    let timerId = setInterval(function(){
        console.log(current);
        if(current == to){
            clearInterval(timerId);
        }
        current++;
    }, 1000)
}
 */
function printNumbers(from, to) {
    let current = from;
    let timerId = setTimeout(function run() {
        console.log(current);
        if (current < to) {
            setTimeout(run, 1000)
        }
        current++;
    }, 0)
}

printNumbers(1, 10)