document.addEventListener('DOMContentLoaded', () => {
    const processorCards = document.querySelectorAll('.processor-card');

    processorCards.forEach(card => {
        const mainImage = card.querySelector('.main-image-container img');
        const thumbnails = card.querySelectorAll('.thumbnail');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Меняем основное изображение на выбранное
                mainImage.src = thumbnail.dataset.full;

                // Убираем обводку у всех миниатюр
                thumbnails.forEach(thumb => thumb.style.border = '2px solid transparent');

                // Добавляем обводку активной миниатюре
                thumbnail.style.border = '2px solid #007BFF';
            });
        });
    });
});
