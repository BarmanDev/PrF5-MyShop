const heartIcon = document.getElementById('heart-icon');
let isRedHeart = false;

if (localStorage.getItem('isFavorite') === 'true') {
  isRedHeart = true;
  heartIcon.src = '../img/icons/HeartLoveLikeRed.svg';
}

heartIcon.addEventListener('click', function() {
  if (isRedHeart) {
    heartIcon.src = '../img/icons/HeartLoveLike.svg';
  } else {
    heartIcon.src = '../img/icons/HeartLoveLikeRed.svg';
  }

  isRedHeart = !isRedHeart;

  localStorage.setItem('isFavorite', isRedHeart.toString());
});


document.addEventListener('DOMContentLoaded', function() {
  const mymain = document.querySelector('.mymain');
  const thumbnails = document.querySelectorAll('.thumbnails');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const active = document.querySelector('.active');
      active.classList.remove('active');
      thumb.classList.add('active');
      mymain.src = thumb.src;
    });
  });
});
