/*
PRECONDICIÓN: 
La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.
El precio de todos los productos es múltiplo de 5
La máquina soporta solo billetes uruguayos (50, 100, 200, 500, 1.000, 2.000)


Se ingresa el valor del producto (múltiplo de 5).
Se ingresa el dinero entregado en la máquina.
Se debe imprimir cuantas monedas de 10 y cuántas de 5 hay que entregar.
En caso que el cambio no alcance se imprime “no hay cambio suficiente”
*/

// TEST - 1 - dada una entrada de 10, espero 1 moneda

//GIVEN - CONDICIONES DADAS - Arranco con un cambio de 10.
let givenAChange = 10;

//WHEN - CUANDO SE EJECUTA LA ACCION DE DOMINIO (LA LÓGICA DE DOMINIO)
// cuando usamos una función, le asignamos el resultado de la función, a la variable
// de la izquierda, tal cual asignamos cualquier valor.
let change = getChange(givenAChange);
// y = f(x) 
/*
    f(x) = ax+b
*/
//THEN/EXPECTED - QUE ESPERAMOS QUE PASE, DADO EL GIVEN
let expectedCoinsOfTen = 1;

//ASSERT - VALIDAMOS LA IGUALDAS DEL ESPERADO CON EL RESULTADO DE LA ACCIÓN
console.log(change.coinsOfTen == expectedCoinsOfTen);

// TEST - 2 - caso de uso dada una entrada de 50, espero 5 monedas
//GiVEN
givenAChange = 50;
//WHEN - aplico función
change = getChange(givenAChange)
//EXPECTED 
expectedCoinsOfTen = 5;
//ASSERT - VALIDO igualdad
console.log(change.coinsOfTen == expectedCoinsOfTen);

//TEST - 3 - Dado una entrada de 55, espero 5 monedas de 10 y 1 de 5.
//GIVEN
givenAChange = 55;
//WHEN
change = getChange(givenAChange)
//EXPECTED
expectedCoinsOfTen = 5;
let expectedCoinsOfFive = 1;
//ASSERT
console.log(change.coinsOfTen == expectedCoinsOfTen)
console.log(change.coinsOfFive == expectedCoinsOfFive)
if(change.coinsOfTen !== expectedCoinsOfTen){
    console.log(`Expected ${expectedCoinsOfTen}, but got ${change.coinsOfTen}`)
}
if(change.coinsOfFive !== expectedCoinsOfFive){
    console.log(`Expected ${expectedCoinsOfFive}, but got ${change.coinsOfFive}`)
}


//TEST - 4 Dado una entrada de 310, espero 30 monedas de 10 y 2 de 5.
//GIVEN
givenAChange = 310;
//WHEN
change = getChange(givenAChange);
//EXPECTED
expectedCoinsOfTen = 30;
expectedCoinsOfFive = 2;
//ASSERT
console.log(change.coinsOfTen == expectedCoinsOfTen)
console.log(change.coinsOfFive == expectedCoinsOfFive)
if(change.coinsOfTen !== expectedCoinsOfTen){
    console.log(`Expected ${expectedCoinsOfTen}, but got ${change.coinsOfTen}`)
}
if(change.coinsOfFive !== expectedCoinsOfFive){
    console.log(`Expected ${expectedCoinsOfFive}, but got ${change.coinsOfFive}`)
}

//TEST - 4 Dado una entrada de 560, espero un mensaje de "No hay cambio suficiente".
//GIVEN
givenAChange = 560;
//WHEN
change = getChange(givenAChange);
//EXPECTED
let expectedMessage = "No hay cambio suficiente"
//ASSERT
console.log(change == expectedMessage)
if(change !== expectedMessage){
    console.log(`Expected ${expectedMessage}, but got ${change}`)
}


// DECLARO LAS FUNCIONES A UTILIZAR MÁS ARRIBA
function getChange(givenAChange){
    if(givenAChange > 550) return "No hay cambio suficiente"
    let coinsOfTen = getChangeOfTen(givenAChange);
    return {
        coinsOfTen: coinsOfTen,
        coinsOfFive: getChangeOfFive(givenAChange-coinsOfTen*10)
    } // OBJETO CAMBIO - CON 2 PROPIEDADS - CANTIDAD DE MONEDAS DE 10 Y DE 5
}
// FUNCIÓN AUXILIAR 1
function getChangeOfTen(aChange){
    return  Math.min(Math.floor(aChange/10),30)
}
// FUNCIÓN AUXILIAR 2
function getChangeOfFive(aChange){
    return aChange/5
}



