const photos = [
            'images/foto_amiga_1.jpg',
            'images/foto_amiga_2.jpg', // Adicione mais fotos aqui!
            'images/foto_amiga_3.jpg', // Certifique-se de que essas fotos existam na pasta 'images'
            // Adicione quantas fotos quiser
        ];

        let currentIndex = 0;
        const currentPhoto = document.getElementById('current-photo');
        const currentPhotoLink = document.getElementById('current-photo-link');
        const slideshowContainer = document.getElementById('slideshow-container');

        // Função para mudar a foto
        function changePhoto() {
            currentIndex = (currentIndex + 1) % photos.length;
            const nextPhotoSrc = photos[currentIndex];

            // Aplica um efeito de fade-out
            currentPhoto.style.opacity = 0;

            setTimeout(() => {
                currentPhoto.src = nextPhotoSrc; // Muda a fonte da imagem
                currentPhoto.style.opacity = 1; // Aplica um fade-in
                // Atualiza o link, se necessário (aqui ele sempre aponta para zoe/index.html)
                // Se você quiser links diferentes para cada foto, a lógica aqui precisaria ser mais complexa
            }, 500); // Tempo do fade-out
        }

        // Inicia o slideshow automático a cada X segundos
        // Troca a cada 5 segundos (5000 milissegundos)
        let slideshowInterval = setInterval(changePhoto, 5000);

        // Opcional: Pausar/Retomar slideshow ao passar o mouse
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval); // Pausa o slideshow
        });

        slideshowContainer.addEventListener('mouseleave', () => {
            slideshowInterval = setInterval(changePhoto, 5000); // Retoma o slideshow
        });

        // Opcional: Adicionar clique na imagem para avançar manualmente (além do link para zoe)
        // Isso pode conflitar com o link, então é bom testar
        /*
        currentPhoto.addEventListener('click', (event) => {
            // Se você quer que o clique na foto avance a foto, desabilite o 'a href' ou gerencie o evento
            // event.preventDefault(); // Impede que o link seja seguido imediatamente
            // changePhoto();
        });
        */