
window.addEventListener('scroll', function() {
    let l1Image = document.querySelector('.l1');
    let l1ImageInitialPosition = l1Image.getBoundingClientRect().bottom;
    
    let cssSection = document.querySelector('.css');
    let cssSectionPosition = cssSection.getBoundingClientRect();
    
    let jsSection = document.querySelector('.js');
    let jsSectionPosition = jsSection.getBoundingClientRect();
    
    let scrollDistance = window.scrollY || document.documentElement.scrollTop;
    let newPosition = 20 - (l1ImageInitialPosition - scrollDistance);
    l1Image.style.transition = 'top 0.3s, left 0.3s';
    
    if (scrollDistance === 0) {
        l1Image.style.top = ''; 
        l1Image.style.left = ''; 
        l1Image.style.position = ''; 
        return; 
    }
    
    if (scrollDistance >= cssSectionPosition.top - window.innerHeight / 2 && scrollDistance < jsSectionPosition.top - window.innerHeight / 2) {
        l1Image.style.left = '180px'; 
    } else if (scrollDistance >= jsSectionPosition.top - window.innerHeight / 2) {
        l1Image.style.left = '1200px'; 
    } else {
        l1Image.style.left = '850px'; 
    }
    
    l1Image.style.position = 'fixed';
    l1Image.style.top = newPosition + 'px';
});


