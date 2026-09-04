document.addEventListener("componentsLoaded", () => {

    const navbar = document.querySelector("#navbar-main");
    const menuButton = document.querySelector(".nav-menu");

    const mobileLinks = document.querySelectorAll(
        ".mobile-link, .mobile-contact"
    );

    const navLinks = document.querySelectorAll(".nav-link");

    if (!navbar) return;


    /* SCROLL */

    function updateNavbar() {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    /* MOBILE MENU */

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            const opened =
                navbar.classList.toggle("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );

        });

    }


    /* CLOSE MOBILE MENU */

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("menu-open");

            if (menuButton) {
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* ACTIVE LINK */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});