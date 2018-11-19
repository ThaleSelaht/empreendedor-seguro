const n = document.getElementsByClassName('navigation__link')

Array.from(n).forEach(x => {
  x.addEventListener('click', function(e) {
    toggleMenu()  
  })  
})

document.querySelector('.navigation__checkbox').addEventListener('click', function() {
  toggleMenu()   
})

function toggleMenu() {
  document.querySelector(".navigation__background").classList.toggle('navigation__background-tog');document.querySelector(".navigation__nav").classList.toggle('navigation__nav-tog')
} 