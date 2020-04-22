///Select DOM Items //Document object model

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

///Set the initial State of the overlay
let showMenu = false;//We want the menu btn close at default
menuBtn.addEventListener('click',toggleMenu);///When we click the menu btn we want the function togglemenu to be fired

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');//here we add a class of close
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));///for each nav items we want to add the show class

        ///Set the State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');//here we remove a class of close
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));///for each nav items we want to add the show class

        ///Set the State
        showMenu = false;
    }
}