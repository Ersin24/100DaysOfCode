function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; //data veriyi alıyor. + => '1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
};

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent= '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault(); //Tarayıcı varsayılan davranışı engeller yeniden yüklenmez sayfa
    const formData = new FormData(event.target); //Bir nesneyi başlatıyoruz
    const enteredPlayerName = formData.get('playername').trim(); //formdaki name değeri alıyoruz. Trim ile boşlukaları alıyoruz. 
    // console.log(enteredPlayerName);

    if (!enteredPlayerName) { //enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return; //Eğer burası return dönerse aşağıdaki kodlar çalışmaz. Kodu durduruyoruz!!
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    //// 1. Gösterim
    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }

    //// 2. Gösteriö
    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
