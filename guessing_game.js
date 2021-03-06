function aRandom(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

function run() {
    var num2 = aRandom(1, 100);
    do {
        const readline = require('readline-sync');
        const num1 = readline.question("A number from 1 to 100 : ");
        if (num1 > num2) {
            console.log('Too big');
        } else if (num1 < num2) {
            console.log('Too small');
        } else if (num1 == num2) {
            console.log('Win -> Exit');
            break;
        }
    } while (true);
}

run();