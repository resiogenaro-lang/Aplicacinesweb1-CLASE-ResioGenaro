// estructura de control -> de bucle

//for (let i = 0 ;i<10;i++){
    // console.log (i)
//}//

//areglos 
const numeros =[1,2,3,4,5,6]
const numeros2 =[1,2,3,4,5,6]

console.log (numeros[5][1])
numeros[2] = 5

for (let i =0 ; i < numeros.length;i++){
    console.log(numeros[i])
}

// objetos 

const persona = {
    //propiedad : valor 
    edad: 20,
    estudia: true ,
    nombre :"genaro",
    redes:
    [
        'tiktok '

    ],
    otros :{
        pasatiempo: 'deporte',
        mascotas : 2 
    },
    caminar : function name (params) {
        //
    }

}

 console.log (persona.edad)