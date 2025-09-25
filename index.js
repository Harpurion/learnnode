let obj = {
    name: 'Artur',
    age: 17,
    sexuality: 'hetero',
    fruits: ['apple', 'banana', 'grape'],
    cat: {
        age: 7,
        name: 'Noodle',
        gender: 'Female'
    },
    parentName: 'Urmas',
    a2sd: 'asd',

};

console.log(obj);
console.log(obj.name);
console.log(obj.fruits[1]);
console.log(obj.cat.name);
console.log(obj.parentName);
console.log(Object.keys(obj));