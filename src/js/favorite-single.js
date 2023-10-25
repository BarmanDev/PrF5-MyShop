const heartIcon = document.getElementById('heart-icon');

function toggleHeart() {
  const isRed = localStorage.getItem('heartIsRed') === 'true';

  if (isRed) {
    heartIcon.src = '/public/img/icons/HeartLoveLike.svg';
    localStorage.setItem('heartIsRed', 'false');
  } else {
    heartIcon.src = '/public/img/icons/HeartLoveLikeRed.svg';
    localStorage.setItem('heartIsRed', 'true');
  }
}

heartIcon.addEventListener('click', toggleHeart);

if (localStorage.getItem('heartIsRed') === 'true') {
  heartIcon.src = '/public/img/icons/HeartLoveLikeRed.svg';
} else {
  heartIcon.src = '/public/img/icons/HeartLoveLike.svg';
}
