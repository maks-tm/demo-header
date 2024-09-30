/*=============== SHOW MENU ===============*/


let btns = document.getElementsByClassName('language-item');

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("language-item");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      // console.log('clicked');
    });
  }  


const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


const menu = document.querySelector('#menu-btn');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
}

/**
   * Toggle mobile nav dropdowns
   */
document.querySelectorAll('.dropdown__arrow').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('.dropdown__menu-active');
      this.parentNode.nextElementSibling.classList.toggle('.dropdown__menu-active');
      e.stopImmediatePropagation();
    });
  });
