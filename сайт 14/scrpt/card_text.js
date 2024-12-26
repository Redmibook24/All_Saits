/**
 * Функция для усечения строки до заданной длины с добавлением многоточия, если строка слишком длинная
 * @param {string} str - Исходная строка, которую нужно усечь
 * @param {number} maxlength - Максимальная длина строки
 * @returns {string} - Усечённая строка, либо исходная строка, если усечение не требуется
 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }
    return str;
}

// Применение функции truncate к тексту в карточках
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card p");
    cards.forEach(card => {
        const maxLength = 40; // Задайте желаемую максимальную длину текста
        card.textContent = truncate(card.textContent, maxLength);
    });
});
