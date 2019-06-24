// const givers = ["Ada", "Brendan", "Ali"];
let newArray = [];

function writeCards(array, day) {
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${day} gift!`);
    }
    return newArray;
}

writeCards(givers, day);

function countdown(num) {
    let countdown = num;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}
