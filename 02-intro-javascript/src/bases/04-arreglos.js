const arreglo = [1,2,3,4];
arreglo.push(1); //Modifica el objeto principal

//let arreglo2 = arreglo;
//arreglo2.push(5) //edita el arreglo original (arreglo)

let arreglo2 = [...arreglo, 5];  //Crea un nuevo arreglo
const arreglo3 = arreglo2.map(function(num){
    return num*2
}); //Crea un nuevo arreglo

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
