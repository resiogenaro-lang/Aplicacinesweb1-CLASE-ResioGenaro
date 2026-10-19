// funciones 
//declaracio


//function suma (a,b){
    //console.log(a+b)
  //return a + b 
//}

//invocar /ejecutar/llamar
   //const resultado = suma(10,2) 

   //console.log(resultado)

   //funcion flecha -> anonima 

   //const resta = (a,b )=>{
    //return a - b 

   //}

   //const resta = (a,b)=> a + b 

      //const resta = a=> a + 5


/// callback 

const a = (cb)=>{
    console.log ('se ejecuto a ')
cb()
}

const b = ()=>{
    console.log ('se ejecuto el callback b')

}
//console.log(b())

//a(b)

a(()=>{
    console.log('se ejecuto el callback b ')
})