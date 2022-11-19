const flexBar = document.querySelector("#flexBar");

function navbarToggle(e){
    e.preventDefault();
    flexBar.classList.toggle('justify-content-end');
}

navbarBurger.addEventListener('click', navbarToggle);