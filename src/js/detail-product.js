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