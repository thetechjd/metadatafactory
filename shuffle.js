const { readdirSync, rename } = require('fs');
const { resolve } = require('path');



const imageDirPath = resolve(__dirname, './images/');

console.log(imageDirPath);
const files = readdirSync(imageDirPath);

console.log(files.length)


//files.forEach(seeFiles);

//function seeFiles(item) {
//    console.log(item);
//}
const old = "./images/";





let counter = 1;

while (files.length != 0) {
    let y = Math.floor(Math.random() * (files.length - 1));
    console.log(y);


    rename(old + files[y], old + "" + String(counter) + ".jpg", (err) => {
        if (err) console.log(err)
    })

    counter = counter + 1
    files.splice(y, 1);




}






