function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let array = [];

for(let i=1;i<=10;i++){
    array.push(getRandomInt(1, 100));
}


let array2 = array.slice();

array2.push(5);

console.log("Array1");
console.log(array);

console.log("Array2");
console.log(array2);