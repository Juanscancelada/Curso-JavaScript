// Nombre: ancho x alto
// 8k 7680 x 4320
// 4k 3840 x 2160
// wqhd 2560 x 1440

function nombreResolucion(ancho,alto){
    if (ancho >= 7680 && alto >= 4320) {
        return "8K";
    }else if (ancho >= 3840 && alto >= 2160){
        return "4K";
    }else if (ancho >= 2560 && alto >= 1440){
        return "WQHD";
    }else {
        return false;
    }
}

let nombre = nombreResolucion(7680,4320)
console.log(nombre);