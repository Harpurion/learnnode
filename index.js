let num = 10;
if (num > 10) {
    console.log('Bigger than 10');
} else if (num === 10) {
    console.log('Equal to 10');
} else {
    console.log('Smaller than 10');
}

let day = new Date("2026-06-25").getDay();
console.log(day);

if(day === 1) {
    console.log('Esmaspäev');
} else if(day === 2) {
    console.log('Teisipäev');
} else if(day === 3) {
    console.log('Kolmapäev');
} else if(day === 4) {
    console.log('Neljapäev');
} else if(day === 5) {
    console.log('Reede');
} else if(day === 6) {
    console.log('Laupäev');
} else if(day === 0) {
    console.log('Pühapäev');
} else {
    console.log('Imepäev');
}

