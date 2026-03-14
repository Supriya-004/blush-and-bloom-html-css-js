document.addEventListener("DOMContentLoaded", function () {

        const toggleBtn = document.getElementById("themeToggle");
        const navbar = document.querySelector(".navbar");

        if (toggleBtn) {
            toggleBtn.addEventListener("click", function () {

                navbar.classList.toggle("dark-mode");

            });
        }

    });