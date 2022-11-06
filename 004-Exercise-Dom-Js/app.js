
// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

// let h1Tag = window.document.querySelector('h1'); // query Selector ile
// let h1Tag = window.document.querySelector('#h1-title'); // query Selector ile
// let h1Tag = window.document.getElementById('h1-title');
// let h1Tag = window.document.body.firstElementChild;
// let h1Tag = window.document.body.children[0];
let h1Tag = window.document.querySelector('#h1-title');

console.dir(h1Tag);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

console.dir(h1Tag.parentElement); //Bir üst element

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(h1Tag.nextElementSibling); //Kardeş element. P tagı sonradan geldiği için nextElementSibling kullandık. Daha öncesinde bir element olsaydı onu da previousElementSibling ile bulacaktık. 

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

h1Tag = document.getElementById('h1-title');

console.dir(h1Tag);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

let higlightedParagraph = document.querySelector('.higlighted-paragraph');

console.dir(higlightedParagraph);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

higlightedParagraph.textContent = 'Burası ersin tarafından değiştirildi' //İçerik değiştirildi.