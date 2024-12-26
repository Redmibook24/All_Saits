// Функция для проверки, пуст ли объект (возвращает true, если объект не содержит свойств)
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Генерация начальной капчи с произвольными буквами
function generateLetterCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captchaText').innerText = captcha;
    return captcha;
}

// Генерация математической капчи, если пользователь ошибся при вводе буквенной капчи
function generateMathCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('captchaText').innerText = `Решите: ${num1} + ${num2}`;
    return num1 + num2;
}

// Инициализация капчи с буквами
let correctCaptcha = generateLetterCaptcha();
let isMathCaptcha = false;  // Флаг для отслеживания, используем ли мы математическую капчу

// Функция проверки капчи
function checkCaptcha() {
    const captchaInput = document.getElementById('captchaInput').value.trim();
    const captchaError = document.getElementById('captchaError');

    // Проверка капчи на правильность
    if (captchaInput === correctCaptcha.toString()) {
        captchaError.style.display = "none"; // Скрываем ошибку
        document.getElementById('submitButton').disabled = false; // Активируем кнопку отправки
        alert("Капча введена верно!");
    } else {
        // Переход к математической капче после ошибки, если мы использовали буквенную
        if (!isMathCaptcha) {
            correctCaptcha = generateMathCaptcha();
            isMathCaptcha = true;
        } else {
            correctCaptcha = generateMathCaptcha(); // Генерируем новую математическую капчу, если пользователь снова ошибается
        }
        captchaError.style.display = "block";
        captchaError.innerText = "Неверный ввод. Попробуйте снова.";
        document.getElementById('captchaInput').value = ""; // Очищаем ввод капчи для повторного ввода
        document.getElementById('submitButton').disabled = true; // Оставляем кнопку отправки отключенной
    }
}

// Проверка ввода и отправка формы, если все поля корректны
function submitForm() {
    const formData = {
        firstName: document.getElementById('first-name').value.trim(),
        lastName: document.getElementById('last-name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        reason: document.getElementById('reason').value.trim()
    };

    // Проверка, что все поля формы заполнены
    if (isEmpty(formData) || Object.values(formData).some(value => value === "")) {
        alert("Заполните все поля формы.");
        return;
    }
    
    // Отправка формы, если все данные введены корректно
    alert("Форма успешно отправлена!");
    document.getElementById('feedbackForm').reset();
    resetCaptcha(); // Сброс капчи для следующей отправки
    document.getElementById('submitButton').disabled = true;
}

// Сброс капчи к начальному состоянию с буквами
function resetCaptcha() {
    correctCaptcha = generateLetterCaptcha();
    isMathCaptcha = false;
    document.getElementById('captchaInput').value = "";
    document.getElementById('submitButton').disabled = true;
}
