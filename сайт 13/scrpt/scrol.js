
    // Функция добавления контента
    function addContentToVisibleDynamicSection() {
        const dynamicSection = document.querySelector(".dynamic-section .dynamic-content");

        if (dynamicSection) {
            const newParagraph = document.createElement("p");
            newParagraph.textContent = "Контент добавлен при прокрутке.";
            dynamicSection.appendChild(newParagraph);
        }
    }

    // Слежение за прокруткой
    window.addEventListener("scroll", function () {
        const dynamicSection = document.querySelector(".dynamic-section");
        if (dynamicSection) {
            const sectionRect = dynamicSection.getBoundingClientRect();

            // Если секция видима на экране
            if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
                addContentToVisibleDynamicSection();
            }
        }
    });
