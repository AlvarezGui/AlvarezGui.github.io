const $menu = document.querySelector('.menu');
const $btnMenuOpen = document.querySelector('.btnMenu-open');
const $btnMenuClose = document.querySelector('.btnMenu-close');

   $btnMenuOpen.addEventListener('click', function(){
       $menu.classList.add('menu-open');
   })

   $btnMenuClose.addEventListener('click', function(){
    $menu.classList.remove('menu-open');
})
