function Hello() {
    console.log("Hello, World!");
}

Hello();
Hello();

function helloName(name) {
    console.log(`Hello, ${name}!`);
}

helloName('Artur');
helloName('Trent');
helloName('Erki');

function hi(name='Nameless', age='Infinite') {
    console.log(`Hi, ${name}. You are ${age} years old.`);
}
hi('Artur', 17);
hi('Trent', 17);
hi('Erki', 17);
hi();

let sum = function (a, b) {
    return a+b;
}

let answer = sum(4,5 );
console.log(answer);
console.log(sum(10, 15));
sum (5,6);

let sub = (a, b) => {
    return a-b;
}

console.log(sub(10, 5));

let mult = (a, b) => a*b;

console.log(mult(10, 5));

let root = a => a*a;

console.log(root(10));

let cool = () => console.log('cool');

cool();

let awesome = {
    party: function () {
        console.log('party!');
    },
    cool: () => console.log('cool'),
    nice () {
        console.log('nice!');
    }
};

awesome.party();
awesome.cool();
awesome.nice();