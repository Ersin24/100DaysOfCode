// const job =  {
//     title: "Devoloper",
//     location: "Munich",
//     salary: 5000,
// }

// const date = new Date().toISOString();

// console.log(date);

// const job2 = {
//     title: "Cooking",
//     location: "USA",
//     salary: 35000,
// }


//// Aynı türden veriler için bu yapıyı kullanacağız.

class Job {
    constructor(jobTitle, location, salary) {
        this.title = jobTitle;
        this.location = location;
        this.salary = salary;
    }

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location}
        and I earn ${this.salary}`)
    }
}

const myJob = new Job('Pompacılık', 'Ankara', 5500);
const cook = new Job('Cooking', 'USA', 2000);

console.table(myJob);

myJob.describe();
cook.describe();

const person = ['ali', 'ahmet', 'sevgi'];

const [ilkIsim, ikinciIsim, UcuncuIsim] = person;

console.log(UcuncuIsim); // SEVGİ

const member = {title: 'Üye', time: 2018, isActive: true}

const { title: baslik, time: zaman, isActive } = member;

console.log(baslik + ' ' + zaman + ' ' + isActive); //Üye 2018 true