const myName = "Ersin";

if (myName === "Ersin") {
  console.log(myName);
}

let isLoggedIn = true;

if (isLoggedIn) {
  console.log('User is logged in!')
}

const enteredUserName = ''; //boş ise false döndürecek dolu olursa true

// enteredUserName.length > 0 ile enteredUserName aynı şey js'ye göre

if (enteredUserName) {
  console.log('User is not a valid')
}