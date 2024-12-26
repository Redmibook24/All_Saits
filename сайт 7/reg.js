function toggleModal() {
    var modal = document.getElementById("modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
