const notificationIcon = document.getElementById('notificationToggle');
const notificationDropdown = document.getElementById('notificationDropdown');
const notificationList = document.getElementById('notificationList');
const toastContainer = document.getElementById('toastContainer');

let notifications = [];
let notificationCounter = 0;
let isDropdownOpen = false; // Флаг для проверки состояния меню
let notificationDisabledUntil = 0; // Время, до которого уведомления заблокированы

// Функция для создания уведомления
function addNotification(text) {
    notificationCounter++;
    const message = `Уведомление ${notificationCounter}: ${text}`;
    notifications.push(message);

    // Создание уведомления
    const notificationItem = document.createElement('div');
    notificationItem.className = 'notification-item';
    
    const messageText = document.createElement('span');
    messageText.className = 'notification-message';
    messageText.innerText = message;
    
    // Кнопка закрытия уведомления
    const closeButton = document.createElement('button');
    closeButton.className = 'close-btn';
    closeButton.innerHTML = '&times;'; // Символ для кнопки закрытия
    
    // Обработчик для кнопки закрытия
    closeButton.addEventListener('click', () => {
        notificationItem.remove(); // Удаление уведомления при клике на кнопку
    });
    
    // Добавление кнопки и текста в уведомление
    notificationItem.appendChild(messageText);
    notificationItem.appendChild(closeButton);

    // Добавление уведомления в контейнер
    toastContainer.appendChild(notificationItem);

    // Если меню не открыто, показываем уведомление в углу
    if (!isDropdownOpen) {
        setTimeout(() => notificationItem.remove(), 5000); // Убираем через 5 секунд
    }

    // Добавление уведомления в выпадающий список
    const listItem = document.createElement('li');
    listItem.innerText = message;
    notificationList.appendChild(listItem);
}

// Обработчик нажатия на иконку уведомлений
notificationIcon.addEventListener('click', () => {
    // Если меню было закрыто, то блокируем уведомления на 10 секунд
    if (!isDropdownOpen) {
        notificationDisabledUntil = Date.now() + 10000; // Остановить уведомления на 10 секунд
    }
    isDropdownOpen = !notificationDropdown.classList.toggle('show'); // Меняем состояние меню
});

// Функция для генерации уведомлений с учетом блокировки
function generateNotifications() {
    const currentTime = Date.now();
    // Проверяем, прошло ли 10 секунд с последнего открытия меню
    if (currentTime >= notificationDisabledUntil) {
        addNotification("Новое событие!");
    } else {
        console.log("Новые уведомления временно приостановлены.");
    }
}

// Генерация уведомлений каждые 3 секунды
setInterval(generateNotifications, 3000);

// Закрытие меню при клике вне его
window.addEventListener('click', (event) => {
    if (!notificationDropdown.contains(event.target) && event.target !== notificationIcon) {
        notificationDropdown.classList.remove('show');
        isDropdownOpen = false; // Меню закрыто
    }
});
