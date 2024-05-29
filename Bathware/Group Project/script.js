/* button Scroll to But now Section */

function btn2(){
    var height = document.body.scrollHeight;
    window.scroll(0, 1150);
}


/* Menu Icon */

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
}
)
