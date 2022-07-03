const { readdirSync, rename } = require('fs');
const { resolve } = require('path');



const imageDirPath = resolve(__dirname, './images/');

console.log(imageDirPath);
const files = readdirSync(imageDirPath);

console.log(files.length)


files.forEach(seeFiles);

function seeFiles(item) {
    console.log(item);
}