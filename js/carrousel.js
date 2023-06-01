// // Este código es opcional y solo es necesario si deseas detener el carrusel al pasar el mouse sobre él

var carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', function () {
    this.querySelector('.carousel').style.animationPlayState = 'paused';
});

carouselContainer.addEventListener('mouseleave', function () {
    this.querySelector('.carousel').style.animationPlayState = 'running';
});