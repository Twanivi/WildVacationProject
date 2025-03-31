const navList = document.querySelector(".nav-list");
const burger = document.querySelector(".nav-menu");

const initMobileMenu = () => {

    if (!navList || !burger) return;

    burger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

export { initMobileMenu };