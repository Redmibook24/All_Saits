function sortProducts() {
    const sortOption = document.getElementById("sort").value;
    const processorList = document.getElementById("processor-list");
    const processors = Array.from(processorList.getElementsByClassName("processor-card"));

    processors.sort((a, b) => {
        if (sortOption === "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        } else if (sortOption === "price") {
            return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
        } else if (sortOption === "manufacturer") {
            return a.dataset.manufacturer.localeCompare(b.dataset.manufacturer);
        }
    });

    // Переставляем карточки в DOM согласно сортировке
    processorList.innerHTML = "";
    processors.forEach(card => processorList.appendChild(card));
}
