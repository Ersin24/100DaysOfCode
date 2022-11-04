// let age = 32;
// // greetingText = 'SelamlamaMetni'
// let greetingText = 'Merhaba, Benim adım \'Ersin\' ';
// alert(greetingText);
// alert(greetingText);
// greetingText = 'Ben gerçekten \'Ersinim\' ';
// alert(greetingText);
// alert(age);

let greetingText = "Merhaba, Ben Ersin 18 yaşındayım.";
let age = 29;
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
    title: 'Developer',
    place: 'New York',
    salary: 12500
}
alert(hobbies[0]);
alert(job.title);

// let adultYears;

// function calculateAdultYears() {
//     adultYears = age - 18;
// }

// calculateAdultYears();
// alert(adultYears);

// age = 25;
// calculateAdultYears();
// alert(adultYears);

let totalAdultYears ;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 25;
totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: 'Max', // Property
  greet() { // Method
    console.log('Hello!');
  }
};

person.greet();

