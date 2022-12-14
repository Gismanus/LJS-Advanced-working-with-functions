let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000,
        }, {
            name: 'Alex',
            salary: 1800,
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
}
function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let result = 0;
        for (let subdep of Object.values(department)){
            result += sumSalaries(subdep);
        }
        return result;
    }
}

console.log(sumSalaries(company));