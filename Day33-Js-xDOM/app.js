// console.log(window); //Windowdaki property ve methodların tüm listesini console'da görebiliriz bu şekilde

// Bunlar ikisi de aynı işlevi görür
// alert();
// window.alert();


// Aynı şekilde yine window objesinden türetilen document kavramımız var. Bunu consoleda yazdırdığımızda tüm html dökümanını vurguladığını görebiliriz. 

// Bunlar da ikisi aynı işleve sahip
// window.document
// document

console.log(document); //tüm html dökümanını görüyoruz


console.dir(document);

document.body.children[1].children[0].href = 'https://google.com' //Dom'un çalışma mantığı!! Bunu console'da görüyoruz

//Biz dom'da getElementById ya da querySelector yapılarını kullanacapğız.