function init() {

    let p1 = createP("Parrafo 1");
    let p2 = createP("Parrafo 2");
    let p3 = createP();

    let a1 = createA("https://discoduroderoer.es", "enlace 1");
    let a2 = createA("https://discoduroderoer.es", "enlace 2");
    let a3 = createA("https://discoduroderoer.es", "enlace 3");

    p1.appendChild(a1);
    p2.appendChild(a2);
    p3.appendChild(a3);

    let elements = [
        "elemento 1",
        "elemento 2",
        "elemento 3"
    ];

    let ul = createUL(elements);

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);

    document.body.appendChild(ul);


}



window.onload = init;