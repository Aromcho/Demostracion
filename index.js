window.addEventListener('scroll', function() {
    let l1Image = document.querySelector('.l1');
    let l1ImageInitialPosition = l1Image.getBoundingClientRect().bottom;

    let sections = document.querySelectorAll('section');
    let scrollDistance = window.scrollY || document.documentElement.scrollTop;
    let sectionIndex = Math.floor(scrollDistance / (window.innerHeight / 2));

    // Ajustamos la cantidad de desplazamiento para la nueva posición de la imagen
    let newPosition = 20 - (l1ImageInitialPosition - scrollDistance) * 0.1; // Disminuimos la velocidad vertical
    
    // Limitamos la velocidad de desplazamiento vertical
    newPosition = Math.max(newPosition, -200); // Máximo hacia arriba
    newPosition = Math.min(newPosition, 200); // Máximo hacia abajo
    
    // Ajustamos la velocidad de desplazamiento horizontal en función del desplazamiento vertical
    let horizontalSpeed = 0.1 * Math.abs(newPosition); // Disminuimos la velocidad horizontal
    
    l1Image.style.transition = 'top 0.5s, left 0.5s'; // Aumentamos el tiempo de transición

    if (scrollDistance === 0) {
        l1Image.style.left = `${850}px`; // Inicialmente a 850
        l1Image.style.top = ''; 
        l1Image.style.position = ''; 
        return; 
    }

    if (sectionIndex === 0) { // Primer scroll
        l1Image.style.left = `${880}px`; // Primer scroll a 850
    } else if (sectionIndex % 4 === 0) { // Si la sección actual es múltiplo de 4 (cada 4 secciones)
        l1Image.style.left = `${180 + horizontalSpeed}px`; // Cambia la posición a la izquierda
    } else if ((sectionIndex - 1) % 4 === 0 || (sectionIndex - 2) % 4 === 0) { // Si la sección actual es 1 o 2 después de un múltiplo de 4
        l1Image.style.left = `${1250 + horizontalSpeed}px`; // Mantén la posición a la derecha
    } else { // Si la sección actual es 3 después de un múltiplo de 4
        l1Image.style.left = `${180 + horizontalSpeed}px`; // Mantén la posición a la izquierda
    }

    l1Image.style.position = 'fixed';
    l1Image.style.top = Math.max(newPosition, 0) + 'px';
});

