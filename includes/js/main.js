// navbar toggle
const navbarCollapse = document.querySelector(".fa-bars");
const navbarLists = document.querySelector(".navbar-lists");

navbarCollapse.addEventListener("click", function () {
  navbarLists.classList.toggle("active");
  navbarCollapse.classList.toggle("active");
});

// skill list filter
const skillCategotyList = document.querySelectorAll(".skill-categoty-list");
const skillBox = document.querySelectorAll(".skill-box");

for (let i = 0; i < skillCategotyList.length; i++) {
  skillCategotyList[i].addEventListener("click", function () {
    for (let j = 0; j < skillCategotyList.length; j++) {
      skillCategotyList[j].classList.remove("skill-categoty-list-active");
    }
    this.classList.add("skill-categoty-list-active");

    const dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < skillBox.length; k++) {
      skillBox[k].classList.remove("active");
      skillBox[k].classList.add("hide");

      if (
        skillBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        skillBox[k].classList.remove("hide");
        skillBox[k].classList.add("active");
      }
    }
  });
}
