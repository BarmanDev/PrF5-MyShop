
const heartIcon = document.getElementById("heart-icon");

let isRedHeart = false;

heartIcon.addEventListener("click", function () {
  if (isRedHeart) {
    heartIcon.src = "../img/icons/HeartLoveLike.svg";
  } else {
    heartIcon.src = "../img/icons/HeartLoveLikeRed.svg";
  }

  isRedHeart = !isRedHeart;
});