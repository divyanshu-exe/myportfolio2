// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});



// =========================
// CLOSE MENU
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});



// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.clientHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// =========================
// HEADER SHADOW
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,8,10,.85)";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(19,19,17,.6)";
        header.style.boxShadow = "none";

    }

});



// =========================
// FADE UP
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
`
.hero-left,
.hero-right,
.project-item,
.skill,
.resume-box,
.contact-box,
.footer-social
`
).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});



// =========================
// PARALLAX (subtle, disabled on touch)
// =========================

const heroCard = document.querySelector(".hero-card");
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 55;

        const y = (window.innerHeight / 2 - e.clientY) / 55;

        heroCard.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

    window.addEventListener("mouseleave", () => {

        heroCard.style.transform = "rotateX(0deg) rotateY(0deg)";

    });

}



// =========================
// PROJECT IMAGE EFFECT
// =========================

document.querySelectorAll(".project-image").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(242,169,60,.18),
            transparent 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#131311";

    });

});



// =========================
// FLOATING BACKGROUND
// =========================

const blurOne = document.querySelector(".blur-one");
const blurTwo = document.querySelector(".blur-two");

window.addEventListener("mousemove", e => {

    blurOne.style.transform =
        `translate(${e.clientX/90}px,${e.clientY/90}px)`;

    blurTwo.style.transform =
        `translate(${-e.clientX/110}px,${-e.clientY/110}px)`;

});



// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});