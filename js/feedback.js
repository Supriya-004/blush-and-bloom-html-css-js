const stars = document.querySelectorAll(".star");
const reaction = document.getElementById("reaction");


stars.forEach(star => {
    star.addEventListener("click", () => {

        rating = star.getAttribute("data-value");

        stars.forEach(s => {
            s.classList.remove("active");
        });

        for (let i = 0; i < rating; i++) {
            stars[i].classList.add("active");
        }



    });

});

document.getElementById("feedbackForm").addEventListener("submit", function (e) {

    e.preventDefault();



});
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();   // stop page refresh
    alert("Thank you for your feedback! 😊");
});