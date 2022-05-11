const aplicarDescuento = new Promise((resolve, reject)=>{
    const dto = false
    if(dto){
        resolve("Descuento aplicado")
    }else{
        reject("Descuento no aplicado")
    }
});

aplicarDescuento
    .then(res =>{
        console.log(res);
})
.catch(error=>{
    console.error(error);
})

// console.log(aplicarDescuento);


//EXISTEN 3 ESTADOS DE LAS PROMESAS
/* 
fulfilled -> CUANDO LA PROMESA SE CUMPLIÓ 
rejected -> CUANDO LA PROMESA NO SE CUMPLIÓ
pendding -> CUANDO QUEDA PENDIENTE

*/