 document.addEventListener('DOMContentLoaded', function() {
        const element = document.getElementById('EasterEgg');

        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;

       
        const randomLeft = Math.floor(Math.random() * (windowWidth - elementWidth));
        const randomTop = Math.floor(Math.random() * (windowHeight - elementHeight));

        
        element.style.left = randomLeft + 'px';
        element.style.top = randomTop + 'px';
    });
//To querendo fazer uma animação mas não to conseguindo nem ver a minha pagina 😭😭😭