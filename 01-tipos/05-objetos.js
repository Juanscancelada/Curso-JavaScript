// Personaje de TV
let nombre = "Goku";
let anime = "Dragon Ball Z";
let atributo = "Fuerte";

let personaje = {
    nombre: "Goku",
    anime: "Dragon Ball Z",
    atributo: "Fuerte",
};

//llamar al objeto 
console.log(personaje);
//llamar una propiedad del objeto, se puede de ambas formas 
console.log(personaje.nombre);
console.log(personaje['nombre']);

//cambiar una propiedad del objeto
personaje.nombre = "Gohan";

//camibar el valor del objeto sin saber la propiedad
let llave = "edad"; 
personaje[llave] = 25;

//eliminar la propiedad de un objeto
delete personaje.anime;
console.log(personaje);
