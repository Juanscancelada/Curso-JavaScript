let i = 2;
while (i < 10) {
    if (i % 2 == 0) {
    console.log("Numero par es: ", i);
    }
    i++;
}

for (let i = 2; i < 10; i++) {
    if(i % 2 == 0){
    console.log("Numero par: ", i);
    }
}


//FOR OF
let animales = ["Lobo","Tigre","Golondrina"];
//definimos como se llamaria cada elemento (animal)
//despues le indicamos el nombre del array (animales)
for(let animal of animales){
    console.log(animal);
}

//Lo mismo del FOR OF, pero manualmente con while
let a = 0;
while (a < animales.length) {
    console.log(animales[a]);
    a++;
}

// FOR IN
let user = {
    id: 1,
    name: "Sebastian",
    age: 21,
};

//FOR IN para saber las propiedades de user
for (let prop in user){
    console.log(prop, user[prop]);
}

//FOR IN para saber las propiedades de animales y su indice
for(let indice in animales){
    console.log(indice, animales[indice]);
}