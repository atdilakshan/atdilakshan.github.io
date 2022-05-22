const navbarCollapse = document.querySelector(".fa-bars");
const navbarLists = document.querySelector(".navbar-lists");


navbarCollapse.addEventListener("click", function () {
    navbarLists.classList.toggle("active");
    navbarCollapse.classList.toggle("active");
});