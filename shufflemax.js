const { readdirSync, rename } = require('fs');
const { resolve } = require('path');



//for loop that runs 3 times
//array that contains numbers that will name the file
//while loop that runs until every file is picked
//splice the number from the number array
//splice the file at the file position

let num = 1;

let numlist = new Array();

for (var i = 1; i <= 2550; i++) {
    numlist.push(i)
}

let shuffledlist = new Array();

while (numlist != 0) {
    let z = Math.floor(Math.random() * (numlist.length - 1));
    shuffledlist.push(numlist[z]);
    numlist.splice(z, 1);

}
console.log(shuffledlist);



//console.log(imageDirPath);


//console.log(files.length)


//files.forEach(seeFiles);

//function seeFiles(item) {
//    console.log(item);
//}



for (i = 0; i < 3; i++) {


    let imageDirPath = resolve(__dirname, './images' + String(num) + '/');

    let files = readdirSync(imageDirPath);

    let old = "./images" + String(num) + "/";



    for (var j = 0; j < files.length; j++) {



        rename(old + files[j], old + "" + String(shuffledlist.shift()) + ".jpg", (err) => {
            if (err) console.log(err)
        })




    }
    console.log(shuffledlist);


    num = num + 1;

}
