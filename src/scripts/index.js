(function() {
      var menuFirstLevel = document.querySelector('.menu__item--last-child');
  var menuBottom = document.querySelector('.menu__bottom');
  var menuHover = document.querySelector('.menu__item--hover');
  var menuIcon = document.querySelector('.fixed__item--menu');
  var menu = document.querySelector('.menu');
  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('menu--none');
    menu.classList.toggle('menu--visible');
  });

  if(document.body.clientWidth <= '768'){
    menuBottom.style.display='none';
    menuFirstLevel.appendChild(menuBottom);
    menuHover.addEventListener('mouseover', function () {
      menuBottom.style.display='block';
    });
    menuHover.addEventListener('mouseout', function () {
      menuBottom.style.display='none';
    });
  }

})();
