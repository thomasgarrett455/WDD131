import cardData from "./memories.mjs";

const flatCardData = cardData.flatMap(memory => 
            memory.photos.map(photoSrc => ({
                ...memory, 
                image: photoSrc, 
                photos: undefined 
            }))
        );

        
        const carouselContainer = document.querySelector('.carousel-container');
        const galleryModal = document.querySelector('.gallery-modal');
        const galleryGrid = document.querySelector('.gallery-grid');
        const closeModalBtn = document.querySelector('.close-modal');

        let currentIndex = 0;

        

        function initializeCarousel() {
            carouselContainer.innerHTML = '';
            galleryGrid.innerHTML = '';

            flatCardData.forEach((data, index) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.index = index;
                if (index === currentIndex) {
                    card.classList.add('active');
                }

                
                const cardFront = document.createElement('div');
                cardFront.classList.add('card-face', 'card-front');
                cardFront.innerHTML = `
                    <img src="${data.image}" alt="${data.cardTitle}" onerror="this.onerror=null;this.src='https://placehold.co/400x500/cccccc/ffffff?text=Image+Not+Found';">
                    <div class="card-arrow-overlay">
                        <button class="card-arrow card-arrow-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <button class="card-arrow card-arrow-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>
                `;

                
                const cardBack = document.createElement('div');
                cardBack.classList.add('card-face', 'card-back');
                cardBack.innerHTML = `
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${data.cardTitle}</h3>
                    <p class="text-gray-500 mb-4">${data.date} - ${data.location}</p>
                    <p class="text-gray-600">${data.description}</p>
                `;

                card.appendChild(cardFront);
                card.appendChild(cardBack);
                carouselContainer.appendChild(card);

                
                const galleryImg = document.createElement('img');
                galleryImg.src = data.image;
                galleryImg.alt = data.cardTitle;
                galleryImg.classList.add('gallery-img');
                galleryImg.dataset.index = index;
                galleryImg.onerror = () => galleryImg.src = `https://placehold.co/200x150/cccccc/ffffff?text=Image+Not+Found`;
                galleryGrid.appendChild(galleryImg);
            });

            addCardEventListeners();
        }

        function updateCarousel() {
            const cards = document.querySelectorAll('.card');
            cards.forEach((card) => {
                card.classList.toggle('active', parseInt(card.dataset.index) === currentIndex);
                if (parseInt(card.dataset.index) !== currentIndex) {
                    card.classList.remove('is-flipped');
                }
            });
        }

        function showNextCard() {
            currentIndex = (currentIndex + 1) % flatCardData.length;
            updateCarousel();
        }

        function showPrevCard() {
            currentIndex = (currentIndex - 1 + flatCardData.length) % flatCardData.length;
            updateCarousel();
        }

        function flipCard(e) {
            if (e.target.closest('.card-arrow')) return;
            const activeCard = document.querySelector('.card.active');
            if (activeCard) {
                activeCard.classList.toggle('is-flipped');
            }
        }

        function openGallery() {
            galleryModal.style.display = 'flex';
        }

        function closeGallery() {
            galleryModal.style.display = 'none';
        }

        function handleGalleryClick(e) {
            if (e.target.classList.contains('gallery-img')) {
                currentIndex = parseInt(e.target.dataset.index);
                updateCarousel();
                closeGallery();
            }
        }
        
        function addCardEventListeners() {
            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('click', flipCard);
                const frontFaceImage = card.querySelector('.card-front img');
                if (frontFaceImage) {
                    frontFaceImage.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const currentCard = e.target.closest('.card');
                        if (currentCard.classList.contains('active') && !currentCard.classList.contains('is-flipped')) {
                             openGallery();
                        }
                    });
                }
                const leftArrow = card.querySelector('.card-arrow-left');
                const rightArrow = card.querySelector('.card-arrow-right');
                if (leftArrow) leftArrow.addEventListener('click', (e) => { e.stopPropagation(); showPrevCard(); });
                if (rightArrow) rightArrow.addEventListener('click', (e) => { e.stopPropagation(); showNextCard(); });
            });
        }

        
        closeModalBtn.addEventListener('click', closeGallery);
        galleryGrid.addEventListener('click', handleGalleryClick);
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                closeGallery();
            }
        });

        
        initializeCarousel();
