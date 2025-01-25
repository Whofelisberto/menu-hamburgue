const menuHam = document.querySelector('.menuHam');
  const menuLinks = document.querySelector('.menu-links');
  menuHam.addEventListener('click', function(){
    menuLinks.classList.toggle('active')
});