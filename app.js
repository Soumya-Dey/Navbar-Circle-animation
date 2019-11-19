const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link-list");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const text = document.querySelector(".text");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open-nav");

    links.forEach(link => {
        link.classList.toggle("fade");
    });

    line1.classList.toggle("hover");
    line2.classList.toggle("hover");
    line3.classList.toggle("hover");

    text.classList.toggle("nav-open");
})
