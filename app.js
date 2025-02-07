document.addEventListener("DOMContentLoaded", function () {
    const rulesBtn = document.getElementById("rules-btn");
    const modal = document.getElementById("rules-modal");
    const closeBtn = document.querySelector(".close");

    // عند الضغط على زر "Rules" تظهر النافذة
    rulesBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // عند الضغط على زر "❌" يتم إغلاق النافذة
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // عند الضغط خارج النافذة يتم إغلاقها
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
