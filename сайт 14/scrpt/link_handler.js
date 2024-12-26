// Функция для проверки, является ли ссылка внешней
function isExternalLink(url) {
    const currentHost = window.location.host; // Текущий домен
    const linkHost = new URL(url).host; // Домен ссылки

    return currentHost !== linkHost; // Сравниваем домены
}

// Делегирование событий для всех внешних ссылок
document.body.addEventListener("click", function (event) {
    // Находим ближайший элемент <a>, если клик был внутри ссылки
    const link = event.target.closest("a");

    // Проверяем, что это ссылка и она внешняя
    if (link && link.tagName === "A" && isExternalLink(link.href)) {
        event.preventDefault(); // Останавливаем переход по ссылке

        // Спрашиваем у пользователя подтверждение
        const confirmLeave = confirm("Вы действительно хотите перейти на сторонний ресурс?");

        if (confirmLeave) {
            // Если пользователь подтвердил, перенаправляем
            window.location.href = link.href;
        } else {
            // Иначе отменяем действие
            console.log("Переход на внешний ресурс отменен пользователем.");
        }
    }
});
