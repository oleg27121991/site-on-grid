let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menulinks = menu.querySelectorAll('nav__item');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menulinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');

        menu.classList.remove('nav--active');

        document.body.classList.remove('stop-scroll')

    })

})

const burger_menu = document.querySelector('.burger');
    document.addEventListener('click', (e) => {

  const click = e.composedPath().includes(burger_menu);

  if ( !click ) {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');

  }

})
