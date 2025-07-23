document.addEventListener('DOMContentLoaded', function() {
    // Array para armazenar o índice do slide atual para cada carrossel
    let slideIndexes = [];
    const allCarouselSlides = document.querySelectorAll('.carousel-slides-nature');

    // Inicializa os índices para cada carrossel e mostra o primeiro slide de cada um
    allCarouselSlides.forEach((carousel, index) => {
        slideIndexes[index] = 0; // Inicia o primeiro slide para cada carrossel
        showSlideNature(0, index); // Mostra o primeiro slide
    });

    // Função para mostrar um slide específico em um carrossel específico
    // n: direção (-1 para anterior, 1 para próximo)
    // carouselIndex: o índice do carrossel que está sendo controlado
    window.moveSlideNature = function(n, carouselIndex) {
        const slides = allCarouselSlides[carouselIndex].querySelectorAll('.carousel-slide-nature');
        let currentSlideIndex = slideIndexes[carouselIndex] + n;

        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0; // Volta para o primeiro slide
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1; // Vai para o último slide
        }

        slideIndexes[carouselIndex] = currentSlideIndex;
        showSlideNature(currentSlideIndex, carouselIndex);
    };

    function showSlideNature(index, carouselIndex) {
        const slides = allCarouselSlides[carouselIndex].querySelectorAll('.carousel-slide-nature');

        // Esconde todos os slides do carrossel atual
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Mostra o slide correto para o carrossel atual
        slides[index].classList.add('active');
    }

    // Opcional: Carrossel automático para todos os carrosséis
    // Você pode ter diferentes intervalos ou ativar/desativar para cada um
    // setInterval(() => {
    //     allCarouselSlides.forEach((carousel, index) => {
    //         moveSlideNature(1, index);
    //     });
    // }, 7000); // Mudar todos os carrosséis a cada 7 segundos
});