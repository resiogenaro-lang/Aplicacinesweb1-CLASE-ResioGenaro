// metodos de arreglo 

const numeros = [2,8,12,50]

//foreach -> loop 
// el callback se ejecuta una vez por elemento 
numeros.forEach((numero,indice ,arreglo)=>{
    console.log (numero, indice, arreglo)

})

//map -> LOOP -> DEVUELVE UN ARREGLO 

const numerosincrementados =  numeros.map ((numeros)=>{
    return numero + 1 
})

console.log (numerosincrementados)

//filter (nuevo arreglo ) y 