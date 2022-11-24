const fs = require('fs');

function readFile(){
    try {
        const fileData = fs.readFileSync('data.json');
    } catch {
        console.log('An error occured!');
    }
    console.log('Hi there!');
}

readFile();

//Genel olarak tüm sayfanın hata mesajı göndermesi yerine bazı yerlere bakmak için kullandığımız kod blouğu.