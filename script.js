document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const header = document.querySelector('header');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const extraGallery = document.getElementById('extra-gallery');

    // 2. HERO CAROUSEL INITIALIZATION
    // This is the specific logic to cycle the photos
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade', // Smooth luxury fade
        speed: 2000, 
        autoplay: {
            delay: 3000, // Cycles every 3 seconds
            disableOnInteraction: false, // Keeps cycling even after clicks
        },
        fadeEffect: {
            crossFade: true // Prevents seeing the background through the images
        }
    });

    // 3. HEADER SCROLL EFFECT
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // 4. GALLERY TOGGLE LOGIC
    if (viewMoreBtn && extraGallery) {
        viewMoreBtn.addEventListener('click', () => {
            if (extraGallery.style.display === "none" || extraGallery.style.display === "") {
                extraGallery.style.display = "block";
                viewMoreBtn.textContent = "Close Archive";
                setTimeout(() => {
                    extraGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10);
            } else {
                extraGallery.style.display = "none";
                viewMoreBtn.textContent = "View Full Archive";
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});