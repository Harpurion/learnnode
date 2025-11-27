function write(text) {
    process.stdout.write(text);
}

console.clear();
write('dihh');

import keypress from "keypress";

keypress(process.stdin);

process.stdin.on("keypress", function (ch, key) {
    console.log(ch, key);
    if(key && key.ctrl && key.name == "c") {   
        process.exit();
}
});

process.stdin.setRawMode(true);
process.stdin.resume();