let list = {
    value: 1, next: {
        value: 2, next: {
            value: 3, next: null
        }
    }
};
console.log(list);
console.log(' ');

function setPrevList(list) {
    list.prev = null;
    while (list.next != null) {
        list.next.prev = list;
        list = list.next;
    }
}
setPrevList(list);
console.log(' ');
console.log(list);
console.log(' ');
function getLastItem(list) {
    while (list.next) {
        list = list.next;
    }
    if (list.prev) {
        list.prev.next = null;
    };
    console.log('inside func')
    console.log(list);
    list.prev = null;
    return list;
}
let arr = [];
while (!arr.includes(getLastItem(list))) {
    arr.push(getLastItem(list));
    console.log(' ');
    
}
console.log(' ');
console.log(arr);