document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('hide');
            
            if (menu.classList.contains('hide')) {
                menuButton.textContent = 'Menu';
            } else {
                menuButton.textContent = 'Close Menu';
            }
        });
    }

    
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close-button");
    const galleryImages = document.querySelectorAll(".gallery img");

    
        galleryImages.forEach(img => {
        img.addEventListener("click", function() {
        modal.style.display = "block";
        const imageToDisplaySrc = this.src;
        modalImg.src = imageToDisplaySrc;
        modalImg.alt = this.alt;
        document.body.classList.add('modal-open');
    });
});

        closeButton.addEventListener("click", function() {
            closeModal();
        });

        function closeModal() {
            modal.style.display = "none";
            document.body.classList.remove('modal-open'); 
        }
    });