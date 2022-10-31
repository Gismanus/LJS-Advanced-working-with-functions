let list = { value: 1 }; // list = {value: 1}
list.next = { value: 2 }; // list = {value: 1, next: {value: 2}}
list.next.next = { value: 3 }; // list = {value: 1, next: {value: 2, next: {value: 3}}}
list.next.next.next = { value: 4 }; // list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4}}}}

let secondList = list.next.next; // secondList = {value: 3, next: {value: 4}}
list.next.next = null; // list = {value: 1, next: {value: 2, next: null}}
console.log(list);
console.log(secondList);

list.next.next = secondList; // list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4}}}}
list = { value: 'new value', next: list }; // list = {value: 'new value', next: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4}}}}}
list.next = list.next.next; // list = {value: 'new value', next: {value: 2, next: {value: 3, next: {value: 4}}}}