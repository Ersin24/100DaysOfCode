// Hepsinde parametre event geçip konsola yazdırınca olabilecekler gözüküyor. event.target ile hhangi element ise ona ulaşıyoruz. data ve value gibi verileri çekiyoruz.

let myPElement = window.document.querySelector('p');

function clickedElement (event) {
    myPElement.textContent = 'clicked!!!!';
    console.log('mouse click!');
    console.log(event);
    event.target.className = 'click';
}

myPElement.addEventListener('click', clickedElement);

let inputElement = window.document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    event.target.style.color = 'red';
    console.log(event);
    console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);

