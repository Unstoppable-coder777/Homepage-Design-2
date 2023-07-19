document.addEventListener("DOMContentLoaded", () => {
    let mobile_nav = document.querySelector(".mobile-nav");
    let toggler = document.querySelector(".navbar-toggler");
    let logo = document.querySelector(".logo-desktop");
    let mobile_logo = document.querySelector(".logo-mobile");
    let btn_desktop = document.querySelector("#btn-desktop");
    let btn_mobile = document.querySelector("#btn-mobile");
    let sub_toggler = document.querySelector("#submenu-toggler");
    let create_Style = document.createElement("style");
    let not_in_submenu = document.querySelectorAll(".not-in-submenu");
    let in_submenu = document.querySelectorAll(".in-submenu");
    let close_submenu = document.querySelector(".submenu-close");
    let sub_close_toggler = document.querySelector("#main-menu");

    toggler.addEventListener("click", () => {
        mobile_nav.classList.toggle("mobile-nav-active");
        logo.classList.toggle("not-show");
        mobile_logo.classList.toggle("show");
        btn_desktop.classList.toggle("not-show");
        btn_mobile.classList.toggle("show");
        document.body.classList.add("not-scroll");
    });

    btn_mobile.addEventListener("click", () => {
        mobile_nav.classList.toggle("mobile-nav-active");
        logo.classList.toggle("not-show");
        mobile_logo.classList.toggle("show");
        btn_desktop.classList.toggle("not-show");
        btn_mobile.classList.toggle("show");
        document.body.classList.remove("not-scroll");
    });

    sub_toggler.addEventListener("click", () => {
        create_Style.innerHTML = ".mobile-nav::after{ height:150%;}.mobile-nav::before{ opacity:1;}";
        document.head.appendChild(create_Style);
        close_submenu.style.opacity = "1";
        for (let i = 0; i < not_in_submenu.length; i++) {
            not_in_submenu[i].style.display = "none";
        }
        for (let j = 0; j < in_submenu.length; j++) {
            in_submenu[j].style.display = "block";
            in_submenu[j].style.opacity = "1";
        }
    });

    sub_close_toggler.addEventListener("click", () => {
        create_Style.innerHTML = ".mobile-nav::after{ height:65px;}.mobile-nav::before{ opacity:0;}";
        document.head.appendChild(create_Style);
        close_submenu.style.opacity = "0";
        for (let i = 0; i < not_in_submenu.length; i++) {
            not_in_submenu[i].style.display = "block";
        }
        for (let j = 0; j < in_submenu.length; j++) {
            in_submenu[j].style.display = "none";
        }
    });

    window.addEventListener("resize", () => {
        let card = document.querySelectorAll(".card-section-for-mobile .col .card");
        if (window.innerWidth < 400) {
            for (let i = 0; i < card.length; i++) {
                if (card[i].classList.contains("col-8")) {
                    card[i].classList.remove("col-8");
                    card[i].classList.add("col-10");
                }
            }
        }
        else {
            for (let j = 0; j < card.length; j++) {
                if (card[j].classList.contains("col-10")) {
                    card[j].classList.remove("col-10");
                    card[j].classList.add("col-8");
                }
            }
        }

        let contact_box = document.querySelector(".contact-box");
        let subnav = document.querySelectorAll(".subnav-box a");
        if (window.innerWidth > 767 && window.innerWidth < 1200) {
            if (contact_box.classList.contains("col-3")) {
                contact_box.classList.remove("col-3");
                contact_box.classList.add("col-4");
            }
            for(let s=0;s<subnav.length;s++){
                subnav[s].classList.add("ms-4");
            }
        }
    });
});