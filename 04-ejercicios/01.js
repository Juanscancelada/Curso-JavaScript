function cualEsMayor(a,b){
    if (a > b) {
        return a;
    }else if (a < b){
        return b;
    }else if(a===b){
        return "Error los numeros son iguales"
    }
    }

let mayor = cualEsMayor(10,3)
console.log(mayor);