(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const course = 89.54654654654;
    let temp = false;
    let temp01 = false;
    document.addEventListener("click", documentactions);
    function documentactions(e) {
        const target = e.target;
        const currency = document.querySelectorAll(".cost-part__currency");
        const cost = document.querySelectorAll(".cost-part__number");
        const date = document.querySelectorAll(".cost-part__date");
        if (target.closest(".cost-part__currency")) {
            if (!temp) {
                temp = true;
                currency.forEach((el => {
                    el.textContent = "₽";
                }));
                cost.forEach((el => {
                    el.textContent = el.textContent * course;
                    let qwe = el.textContent;
                    let asd = Number(qwe);
                    let zxc = Math.round(asd);
                    el.textContent = zxc;
                }));
                return;
            }
            if (temp) {
                temp = false;
                currency.forEach((el => {
                    el.textContent = "$";
                }));
                cost.forEach((el => {
                    el.textContent = el.textContent / course;
                    let qwe = el.textContent;
                    let asd = Number(qwe);
                    let zxc = Math.round(asd);
                    el.textContent = zxc;
                }));
                return;
            }
        }
        if (target.closest(".cost-part__date")) {
            if (!temp01) {
                temp01 = true;
                date.forEach((el => {
                    el.textContent = "/Day";
                }));
                cost.forEach((el => {
                    el.textContent = el.textContent / 30;
                    let qwe = el.textContent;
                    let asd = Number(qwe);
                    let zxc = Math.round(asd * 10) / 10;
                    el.textContent = zxc;
                }));
                return;
            }
            if (temp01) {
                temp01 = false;
                date.forEach((el => {
                    el.textContent = "/Months";
                }));
                cost.forEach((el => {
                    el.textContent = el.textContent * 30;
                }));
                return;
            }
        }
    }
    window["FLS"] = true;
    isWebp();
    menuInit();
})();