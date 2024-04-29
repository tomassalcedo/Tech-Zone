
$(document).ready(function() {
    var currentIndex = 0;
    var items = $('.slider li');
    var totalItems = items.length;

    function carousel() {
        var itemWidth = items.width(); // Obtén el ancho de cada elemento de la lista
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        var translateValue = -currentIndex * itemWidth; // Calcula la cantidad de píxeles para mover el conjunto de imágenes
        $('.slider').css('transform', 'translateX(' + translateValue + 'px)'); // Aplica la transformación para mover el conjunto de imágenes
    }

    setInterval(carousel, 3000); // Cambia de imagen cada 3 segundos
});