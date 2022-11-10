for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Dizilerde güncel
const users = ['Ersin', 'Ahmet', 'Ayşe', 'Selim'];

for (const user of users) {
    console.log(user);
}

//Dizilerde eski 
// for (let i = 0; i < someArray.length; i++) {
//     console.log(someArray[i]);
//     }

const children = {
    name: 'Ahmet',
    age: 32,
    isAdminUsers: false,
}

for (const child in children) {
    // console.log(children);
    // console.log(child);
    console.log(children[child]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Çıkmak istiyor musunuz?');
}

console.log('Başarılı');