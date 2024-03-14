let i = 0;

//Se evalua primero la condicion y si se cumple se ejecuta el codigo
while (i < 10) {
    if (i % 2 == 0) {
        console.log("Numero par: ", i);
    }
    i++;
}


// Ejecuta el codigo y luego evalua la condicion si se cumple vuelve arriba y lo ejecuta
do {
    if (i % 2 == 0) {
        console.log("Numero par");
    }
    i++;
}while (i < 2)