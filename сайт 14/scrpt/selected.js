
    document.addEventListener("DOMContentLoaded", function () {
        const processorCards = document.querySelectorAll('.processor-card');
        const processorList = document.getElementById('processor-list');

        // Обработчик кликов по карточкам
        processorCards.forEach(card => {
            card.addEventListener('click', function (event) {
                // Проверка, если нажата клавиша Ctrl (или Cmd на Mac)
                const isCtrlPressed = event.ctrlKey || event.metaKey;

                // Если Ctrl не нажат, то снимаем выделение с остальных карточек
                if (!isCtrlPressed) {
                    processorCards.forEach(card => card.classList.remove('selected'));
                }

                // Переключаем выделение на текущую карточку
                this.classList.toggle('selected');
                // Остановим всплытие события, чтобы клик по карточке не был захвачен обработчиком кликов по всему документу
                event.stopPropagation();
            });
        });

        // Обработчик кликов по документу
        document.addEventListener('click', function () {
            // Снимаем выделение с всех карточек, если клик был вне
            processorCards.forEach(card => card.classList.remove('selected'));
        });

        // Добавляем обработчик, чтобы клик по контейнеру карточек не снимал выделение
        processorList.addEventListener('click', function (event) {
            // Останавливаем всплытие события, чтобы клик по контейнеру не приводил к снятию выделения
            event.stopPropagation();
        });
    });