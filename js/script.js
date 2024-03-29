/*=================== toggle icon navbar ==================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=================== scroll sections active link ==================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});

/*=============== sticky navbar ===============*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*=================== remove toggle icon and navbar when click navbar link (scroll) ==================*/
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');

};

      /*-- typed js --*/

      var typed = new Typed('#multitext', {
        strings: [ 'Frontend Develloper','Designer', 'Coder'],
        typedSpeed: 30,
        startDelay: 500,
        backDelay: 1400,
        backSpeed: 50,
        loop: true,
        showCursor: true,
    });

    // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 700px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  }); 

  /*====== scroll reveal ======*/
  ScrollReveal({
    reset : true,
    distance : '80px',
    duration : 2001,
    delay : 200
  });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
