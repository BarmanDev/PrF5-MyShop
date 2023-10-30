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
