window.addEventListener('scroll', function() {
    let l1Image = document.querySelector('.l1');
    let l1ImageInitialPosition = l1Image.getBoundingClientRect().bottom;

    let sections = document.querySelectorAll('section');
    let scrollDistance = window.scrollY || document.documentElement.scrollTop;
    let sectionIndex = Math.floor(scrollDistance / (window.innerHeight / 2));


    let newPosition = 20 - (l1ImageInitialPosition - scrollDistance) * 0.1; 
    

    newPosition = Math.max(newPosition, -200); 
    newPosition = Math.min(newPosition, 200); 
    
   
    let horizontalSpeed = 0.1 * Math.abs(newPosition); 
    
    l1Image.style.transition = 'top 0.5s, left 0.5s'; 

    if (scrollDistance === 0) {
        l1Image.style.left = `${850}px`; 
        l1Image.style.top = ''; 
        l1Image.style.position = ''; 
        return; 
    }

    if (sectionIndex === 0) { 
        l1Image.style.left = `${880}px`; 
    } else if (sectionIndex % 4 === 0) { 
        l1Image.style.left = `${180 + horizontalSpeed}px`; 
    } else if ((sectionIndex - 1) % 4 === 0 || (sectionIndex - 2) % 4 === 0) { 
        l1Image.style.left = `${1250 + horizontalSpeed}px`; 
    } else { 
        l1Image.style.left = `${180 + horizontalSpeed}px`; 
    }

    l1Image.style.position = 'fixed';
    l1Image.style.top = Math.max(newPosition, 0) + 'px';
});

