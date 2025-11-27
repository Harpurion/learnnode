import * as cheerio from 'cheerio';
import fs from 'fs';
const sleep = ms => new Promise(r => setTimeout(r, ms));
let cacheDir = import.meta.dirname + '../cache/';
if(!fs.existsSync(import.meta.dirname + '../cache')){
    fs.mkdirSync(import.meta.dirname + '../cache');
}

for(let i=3173; i>3163; i--) {
    if(fs.existsSync(import.meta.dirname + `/${i}.html`)) {
        let body = fs.readFileSync(cacheDir + `/${i}.html`);
    }
 let res = await fetch(`https://xkcd.com/${i}/`)
 let body = await res.text();
 await sleep (1000);

 const $ = cheerio.load(body);
 let img = $('#comic>img');
 console.log(img.attr('src'));
 console.log(img.attr('alt'));
 console.log(img.attr('title'));
}