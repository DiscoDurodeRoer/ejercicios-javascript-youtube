function test() {

    let a = [1, 2, 3, 4, undefined, 6, 7, 8, "hola", 10];
    let noArray = "Hola";

    let total = sumaArray(noArray);
    let media = mediaArray(a);
    let enc = exists(a, 5);

    console.log(total);
    console.log(media);
    console.log(enc);

}

window.onload = test;