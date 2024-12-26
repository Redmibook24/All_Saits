window.addEventListener('scroll', function() {
    let parallax = document.querySelectorAll('.parallax');

    parallax.forEach(function(element) {
        let offset = window.pageYOffset;
        let speed = element.getAttribute('data-speed');
        element.style.backgroundPositionY = offset * speed + 'px';
    });
});
