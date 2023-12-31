document.addEventListener('DOMContentLoaded', function () {

    const heartIcons = document.querySelectorAll('.red-heart');

    heartIcons.forEach(heartIcon => {
        const productId = heartIcon.closest('.product-card').querySelector('h2').textContent;

        const isFavorite = localStorage.getItem(`favoriteProduct_${productId}`) === 'true';
        if (isFavorite) {
            heartIcon.src = '../../public/img/icons/HeartLoveLikeRed.svg';
        }

        heartIcon.addEventListener('click', function () {
            toggleFavorite(heartIcon, productId);
        });
    });
});

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

const mymain = document.querySelector ('.mymain')
const thumbnails = document.querySelectorAll ('.thumbnails')

thumbnails.forEach(thumb => {

    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        mymain.src = thumb.src
    })

})

