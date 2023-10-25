document.addEventListener('DOMContentLoaded', function () {
  const favoriteList = document.getElementById('favorite-list');

  for (let local in localStorage) {
      if (local.startsWith('favoriteProduct_') && localStorage.getItem(local) === 'true') {
          const favoriteItem = document.createElement('li');
          favoriteItem.textContent = local.replace('favoriteProduct_', ''); 
          favoriteList.appendChild(favoriteItem);
      }
  }
});
