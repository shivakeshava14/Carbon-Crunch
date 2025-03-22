
document.addEventListener("DOMContentLoaded", function () {
    const statsBoxes = document.querySelectorAll(".stats-box");
    statsBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, index * 300);
    });
});