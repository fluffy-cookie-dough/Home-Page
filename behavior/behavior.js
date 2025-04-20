document.addEventListener("DOMContentLoaded", function() 
{
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('click', toggleMenu);
    function toggleMenu() {
        var menu = document.getElementById('menu'); 
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block"; 
        }
    }
    
    let thumbnailElements = document.querySelectorAll(".smart-thumbnail");
    thumbnailElements.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            thumbnailElements.forEach(function(other) {
                if (other !== thumbnail) {
                    other.classList.remove("large-image");
                    other.classList.add("small-image");
                }
            });
    
            if (thumbnail.classList.contains("small-image")) {
                thumbnail.classList.remove("small-image");
                thumbnail.classList.add("large-image");
            } else {
                thumbnail.classList.remove("large-image");
                thumbnail.classList.add("small-image");
            }
        });
    });

    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const overlay = container.querySelector('.video-click-overlay');
        const iframe = container.querySelector('iframe');
        const baseSrc = iframe.getAttribute('src').split('?')[0];

        overlay.addEventListener('click', () => {
            const isExpanded = container.classList.contains('expanded');
            if (!isExpanded) {
                videoContainers.forEach(c => {
                    if (c.classList.contains('expanded')) {
                        c.classList.remove('expanded');
                        const otherOverlay = c.querySelector('.video-click-overlay');
                        const otherIframe = c.querySelector('iframe');
                        const originalSrc = otherIframe.getAttribute('src').split('?')[0];
                        otherIframe.setAttribute('src', originalSrc);
                        otherOverlay.style.display = 'block';
                    }
                });

                container.classList.add('expanded');
                const newSrc = `${baseSrc}?autoplay=1&mute=1`;
                iframe.setAttribute('src', newSrc);
                overlay.style.display = 'none';
            }
        });
    });

});