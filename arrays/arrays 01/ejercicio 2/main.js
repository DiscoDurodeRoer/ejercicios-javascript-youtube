function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let array = [];

for(let i=1;i<=10;i++){
    array.push(getRandomInt(1, 100));
}

console.log(array);
