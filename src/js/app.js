

function toggleFavorite(heartIcon, productId) {
    
    const localStorageKey = `favoriteProduct_${productId}`;

    if (heartIcon.src.endsWith('HeartLoveLike.svg')) {
        heartIcon.src = '../../public/img/icons/HeartLoveLikeRed.svg';
        localStorage.setItem(localStorageKey, 'true');
    } else {
        heartIcon.src = '../../public/img/icons/HeartLoveLike.svg';
        localStorage.setItem(localStorageKey, 'false'); 
    }
}



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
