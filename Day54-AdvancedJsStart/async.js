// const fs = require('fs');
const fs = require("fs");

// function readFile() {
//   let fileData;

//   // fs.readFile('data.txt', function(error, fileData){
//   //     console.log('File parsing done!');
//   //     console.log(fileData.toString())
//   // })

//   // console.log('Hi there') //Önce burası çıktı veriyor.

//   //Burası bize daha fazla kod yazma imkanı sunuyor
//   fs.readFile("dadta.txt")
//     .then(function (fileData) {
//       console.log("File parsing done!");
//       console.log(fileData.toString());
//     })
//     .then(function () {})
//     .catch(function (error) {
//       console.log(error);
//     });

//   console.log("H there");
// }

async function readFile(){
    let fileData;
    try{
        fileData = await fs.readFile('data.txt')
    } catch (error) {
        console.log(error)
    }

    console.log(fileData.toString());
    console.log('File parsing done!')
    console.log('hi there')
}





readFile();
