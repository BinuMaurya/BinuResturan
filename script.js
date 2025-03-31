document.addEventListener("DOMContentLoaded", function () {
    let heroContent = document.querySelector(".hero-content h1");
    heroContent.innerHTML = "Welcome to BINU RESTAURANT"; // Update text
});
// Like Button Functionality
let likeCount = localStorage.getItem("likeCount") || 0;
document.getElementById("likeCount").innerText = likeCount;

document.getElementById("likeBtn").addEventListener("click", function () {
    likeCount++;
    localStorage.setItem("likeCount", likeCount);
    document.getElementById("likeCount").innerText = likeCount;
});

// Rating System
let stars = document.querySelectorAll(".star");
let ratingResult = document.getElementById("ratingResult");

stars.forEach((star) => {
    star.addEventListener("click", function () {
        let rating = this.getAttribute("data-rating");
        localStorage.setItem("rating", rating);
        ratingResult.innerText = `You rated: ${rating} Stars`;

        stars.forEach((s) => s.classList.remove("active"));
        this.classList.add("active");
    });
});

// Load saved rating
let savedRating = localStorage.getItem("rating");
if (savedRating) {
    ratingResult.innerText = `You rated: ${savedRating} Stars`;
    stars[savedRating - 1].classList.add("active");
}

// Feedback Form Functionality
document.getElementById("submitFeedback").addEventListener("click", function () {
    let feedback = document.getElementById("feedbackText").value;
    if (feedback.trim() === "") {
        alert("Please write some feedback before submitting.");
        return;
    }
    alert("Thank you for your feedback!");
    document.getElementById("feedbackMessage").innerText = "Your feedback has been submitted.";
    document.getElementById("feedbackText").value = "";
});
