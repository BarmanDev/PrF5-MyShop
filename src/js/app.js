'use strict'



const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', ()=>{
       
        let posicion = i
        let operacion = posicion * -16.667

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach( ( cadaPunto , i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.remove('activo')

    })
})
