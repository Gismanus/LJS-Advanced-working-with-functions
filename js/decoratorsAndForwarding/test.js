function sayHi(phrase){
    console.log(this.name + ' ' + phrase);
}

let user = {name: 'John'};
let admin = {name: 'Admin'};

sayHi.call(user, 'lol');
sayHi.call(admin, 'lol');