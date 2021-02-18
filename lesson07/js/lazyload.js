// Lazy loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    rootMargin: '0px 0px 50px 0 px' ,
    threshold: 0
};

if ('intersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isInterecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOption);
imagesToLoad.forEach((img) => {
    imgObserver.observe(img);  
});

} else {
    imagesToLoad.forEach ((img) => {
        loadImages(img);
    });
}


