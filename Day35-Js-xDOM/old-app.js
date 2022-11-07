// console.log(window); //Windowdaki property ve methodların tüm listesini console'da görebiliriz bu şekilde

// Bunlar ikisi de aynı işlevi görür
// alert();
// window.alert();


// Aynı şekilde yine window objesinden türetilen document kavramımız var. Bunu consoleda yazdırdığımızda tüm html dökümanını vurguladığını görebiliriz. 

// Bunlar da ikisi aynı işleve sahip
// window.document
// document

// console.log(document); //tüm html dökümanını görüyoruz


// console.dir(document);

// document.body.children[1].children[0].href = 'https://google.com' //Dom'un çalışma mantığı!! Bunu console'da görüyoruz

//Biz dom'da getElementById ya da querySelector yapılarını kullanacapğız.

// console.dir(document.body.firstChild) // #text Sonucu veriyor Burası beyaz boşluk aslında body ile etiket arasında kalan
// console.dir(document.body.firstElementChild) // Bizim ilk elementimiz

let anchorTag = window.document.getElementById('external-link');

anchorTag.href = 'https://instagram.com';
anchorTag.innerHTML = 'instagram';
anchorTag.title = 'instagram';


let pTag = window.document.querySelector('p'); //Eşleşen ilk etiketi alır. Eğer her şeyi almasını istiyorsak querySelectorAll kullanmamız gerek
pTag.title = 'Burası ilk p tagı';

let hTag = window.document.querySelector('h1');
hTag.className = 'burasıh1etiketi';


//console.dir ile verilere sürekli bak ve dom'da ulaş!

//YENİ BİR ELEMAN EKLEME

let newAnchorElement = document.createElement('a'); //1.1.adım

newAnchorElement.href = 'https://www.google.com';
newAnchorElement.textContent = 'Go on google!';

let firstParagraph = document.querySelector('p'); //Parent elemanını seçiyoruz

firstParagraph.append(newAnchorElement);

console.dir(newAnchorElement);


 // Eleman Silme

 let firstH1Elemenet = window.document.querySelector('h1');

 ////1. adım

//  firstH1Elemenet.remove();

 ////2. adım

 firstH1Elemenet.parentElement.removeChild(firstH1Elemenet);

 // Eleman hareket ettirme

 firstParagraph.parentElement.append(firstParagraph); //Aslında eleman ekle diyoruz ama sonuna eklediği için hareket ettirmiş oluyoruz.

 // innerHTML (textContent ile farkı içeriğinde html elemanlarını da yazıyor gösterebildiğidir.)

 let myDiv = window.document.querySelector('div');

 myDiv.textContent = 'İçerik değiştirildi <strong>burası</strong>';

 let lastDiv = window.document.getElementById('div-iki');

 lastDiv.innerHTML = 'İçerik değiştirildi <strong>burası</strong>'
