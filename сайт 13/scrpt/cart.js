// Функция-конструктор Accumulator
function Accumulator(startingValue) {
    // Свойство для хранения текущего значения
    this.value = startingValue;

    // Метод для считывания нового числа
    this.read = function() {
        // Считываем новое значение от пользователя
        const newValue = parseFloat(prompt("Введите число для добавления:"));
        
        // Проверка на корректность введённого значения
        if (!isNaN(newValue)) {
            this.value += newValue; // Прибавляем новое значение к текущему
        } else {
            alert("Пожалуйста, введите корректное число."); // Сообщение об ошибке
        }
    };
}

// Пример использования
const accumulator = new Accumulator(10); // Создаем экземпляр с начальным значением 10
accumulator.read(); // Вызываем метод read для ввода значения
alert(accumulator.value); // Выводим текущее значение
accumulator.read(); // Снова вызываем метод read для ввода нового значения
alert(accumulator.value); // Выводим обновленное текущее значение
