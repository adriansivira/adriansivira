// let mes = prompt( "Inserta mes","Ene")
// let día = prompt( "Inserta día",01)
// let año = prompt( "Inserta año","2022")

// console.log(mes,día,año)

// if (mes=="Dic" && día=="25"){
//     console.log("Feliz navidad!")
// } else {
//     console.log ("No es navidad")
// }

// let uno = parseInt(prompt("Inserta el primer número", 0))
// let dos = parseInt(prompt("Inserta el segundo número", 0))
// let tres = parseInt(prompt("Inserta el tercer número", 0))

// if (uno == dos && uno == tres) {
//     console.log((uno+dos)*tres)
// } else {
//     console.log ("Los números no son iguales")
// }


// let uno = parseInt(prompt("Inserta el primer número", 0))
// let dos = parseInt(prompt("Inserta el segundo número", 0))
// let tres = parseInt(prompt("Inserta el tercer número", 0))

// if (uno<10 && dos<10 && tres<10) {
//     console.log("All numbers are less than 10")
// } else {
//     console.log("Negativo todo")
// }

// let x = parseInt(prompt("Inserta el valor x", 0))
// let y = parseInt(prompt("Inserta el valor y", 0))

// if (x>0 && y>0) {
//     console.log("Cuadrante 1")
// } if (x<0 && y>0) {
//     console.log("Cuadrante 2")
// } if (x<0 && y<0) {
//     console.log("Cuadrante 3")
// } if (x>0 && y<0 ) {
//     console.log("Cuadrante 4")
// }

// let sueldo = parseInt(prompt("Ingresa sueldo", 0))
// let antiguedad = parseInt(prompt("Ingresa años de antieguedad", 0))

// if (sueldo<500 && antiguedad >= 10) {
//     console.log(sueldo + (sueldo*0.20))
// } 

// if (sueldo<500 && antiguedad < 10) {
//     console.log(sueldo + (sueldo*0.05))
// }
// if (sueldo>=500) {
//     console.log("Sueldo sin cambios")
// }

// let notauno = parseInt(prompt("Ingrese nota", 0))
// let notados = parseInt(prompt("Ingrese nota", 0))
// let notatres = parseInt(prompt("Ingrese nota", 0))

// if ((notauno+notados+notatres)/3>=7) {
//     console.log("Promoted")
// } else {
//     console.log("Raspao")
// }

// let pone = prompt("Insert password", )
// let ptwo = prompt("Insert password again", )

// if (pone == ptwo) {
//     console.log("Password correct!")
// } else {
//     console.log ("Try again")
// }

// let one = parseInt(prompt("Insert number", ))
// let two = parseInt(prompt("Insert another number", ))

// if (one>two) {
//     console.log(`the sum: ${one+two} the subtraction: ${one-two}`)
// } else {
//     console.log(`the product: ${one*two} the division: ${one/two}`)
// }

// let one = parseInt(prompt("Insert grade 1", ))
// let two = parseInt(prompt("Insert grade 2", ))
// let tre = parseInt(prompt("Insert grade 3", ))

// let prom = (one+two+tre)/3

// if (prom >= 4) {
//     console.log (`The average is ${prom} so: approved!`)
// } else {
//     console.log ("Failed, mmgvo bruto gafo estudia sapo, tu mama te va a joder")
// }


// FOR //+



// for (let i = 0; i < 25; i++) {
//     console.log(i*11)
// }

// let serie = []
// for (let i=0; i<25; i++) {
//     serie.push(i*11) 
// }
// console.log(serie)

// let serie = []
// for (let i = 1; i<500; i++) {
//     serie.push(i*8)
// }
// console.log(serie)

// ejercicio 3

// let grades = [9,4,6,3,8,4,6,8,5,10]
// let moreThan = 0
// let lessThan = 0

function grade () {
for (let i=0; i<grades.length; i++) {
    if (grades[i] >= 7) {
        moreThan = (moreThan + 1)
    } else {
        lessThan = (lessThan + 1)
    }
}
console.log(moreThan,lessThan)
}

// Ejercicio 4

// let altura = []
// let sum = 0

// function tamaños1() {

// for (i=1 ; i<6; i++) {
//     let alt = parseFloat(prompt("Ingrese altura", 1,80))
//     altura.push(alt)
// }
// console.log(altura)
// for (e=0 ; altura.length; e++) {
//     sum += altura[e]
// }
// let prom = sum/5
// console.log(prom)

// }

alt = 0

function tamaños2() {
    for (i = 0; i<5; i++){
        alt = parseFloat(prompt("Ingresa altura:")) + alt
    }
let prom = alt / 5
console.log(prom)
}

// Ejercicio 5

let lessthan300 = 0
let morethan300 = 0
let totalnomina = 0

function salary() {
    for (i = 0; i<5; i++){
        let alt ;
        do{
            alt = parseInt(prompt("Insert Salary between 100 and 500:"))

        } while (alt < 100 || alt > 500)
        totalnomina = totalnomina + alt
        if (alt >= 100 && alt <= 300) {
            lessthan300 = lessthan300 + 1
        } 
        if (alt >= 300 && alt <= 500) {
            morethan300 = morethan300 + 1
        }
    }
    console.log (`Less than 300: ${lessthan300} - More than 300: ${morethan300}`)
    console.log (`Total nomina: ${totalnomina}`)
}

salary()

// Ejercicio 6




