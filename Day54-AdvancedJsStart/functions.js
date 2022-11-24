function greetUser(greetingPrefix, userName= 'user'){
    // console.log(greetingPrefix + ' ' + userName + '!');
    console.log(`${greetingPrefix} ${userName} !`); // Backtik ile
}

greetUser('Hi', 'Max');
greetUser('Hi');

function sumUp(...values){
    let total = 0;

    for (const value of values){
        total += value;
    }

    return total;
}

console.log(sumUp(1,3,5)); // Ya böyle normal girdi vermemiz gerekir.

console.log(sumUp([1,5,6])) // 01,5,6. Js bunu bir bütün olarak görür. Array olduğunu anlayamaz. O yüzden yine sparete operatorunu kullanacağız.

const inputNubmers = [1,5,6];

console.log(sumUp(...inputNubmers)); // 12
console.log(sumUp(...[1,5,6])); // 12

