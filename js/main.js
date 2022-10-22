const nav = document.querySelector('.header__inner');
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const noScroll = document.querySelector('body');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    noScroll.classList.toggle('no-scroll');
}


const navLink = document.querySelectorAll('.header__navlink');

for (var i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function(){
        nav.classList.toggle('nav--mobile');
        menuIcon.classList.toggle('menu-icon-active');
        noScroll.classList.toggle('no-scroll');
    }
  }

//https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/Events