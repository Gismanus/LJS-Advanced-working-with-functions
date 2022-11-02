function inBetween(a, b) {
    return function(item){
        if(item >= a && item <= b){
            return item;
        }
    }
};
function inArray(arr){
    return function(x){
        return arr.includes(x);
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log('newArr1');
console.log(arr.filter(inBetween(3, 6)));

console.log('newArr2');
console.log(arr.filter(inArray([1, 2, 10])));