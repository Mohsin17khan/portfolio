// toggle icons
let menuIcon = document.querySelector('menu-icons');
let navbar = document.querySelector('navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll section active liness
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[hre*=' + id + ']').classList.add('active');    
                });
            };
        });
            // sticky navbar
            let header = document.querySelector('header');
            header.classList.toggle('sticky', windowm.scrollY > 100);
            
            // remove toggle icons

            menuIcon.classList.toggle('bx-x');
            navbar.classList.remove('active');


    };


