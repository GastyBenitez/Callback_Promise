const mensaje = document.querySelector("#body");

const aplicarDescuento = new Promise((resolve, reject)=>{
    const dto = false
    if(dto){
        resolve("Descuento aplicado.")
    }else{
        reject("Descuento no aplicado.")
    }
});

aplicarDescuento
    .then(res =>{
        console.log(res);
    const mensajeP = document.createElement("p");
    mensajeP.classList.add("aplicado")
    mensajeP.textContent =  res
    mensaje.appendChild(mensajeP);
})
.catch(error=>{
    console.warn(error);
    const mensajeP2 = document.createElement("p");
    mensajeP2.classList.add("no_aplicado")
    mensajeP2.textContent = error
    mensaje.appendChild(mensajeP2)
})

// console.log(aplicarDescuento);


//EXISTEN 3 ESTADOS DE LAS PROMESAS
/* 
fulfilled -> CUANDO LA PROMESA SE CUMPLIÓ 
rejected -> CUANDO LA PROMESA NO SE CUMPLIÓ
pendding -> CUANDO QUEDA PENDIENTE

*/

//CREAR CON JAVASCRIPT UN CODIGO PARA QUE SE PUEDA MOSTRAR EN EL DOM LA INFO QUE DEVULVE LA PROMESA