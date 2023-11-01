

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


/* function mute() {
    var aud = document.getElementById("music");
    if (aud.muted == false) {aud.muted = true}
    else {aud.muted = false}
    }

function view_first() {
        document.getElementById('first').style.visibility='visible';
        document.getElementById('first').style.display='block';
        document.getElementById('second').style.visibility='hidden';
        document.getElementById('second').style.display='none';
    }
    
function view_second() {
        document.getElementById('second').style.visibility='visible';
        document.getElementById('second').style.display='block';
        document.getElementById('first').style.visibility='hidden';
        document.getElementById('first').style.display='none';
    }
     */