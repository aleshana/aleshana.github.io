// Lazy loading images

const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { 
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
};

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
  

if ('IntersectionObserver' in window) {
    console.log("testing123");

    const imgObserver = new IntersectionObserver((items) => {
        console.log("Number of items " + items.length);
        items.forEach((item) => {
            console.log("In forEach ");
            if (item.isIntersecting) {
                console.log(item.isIntersecting);
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            } 
            else {
                console.log("Can't see image")
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        console.log("In imagesToLoad.forEach");
        imgObserver.observe(img);  
    });
} else {
    imagesToLoad.forEach ((img) => {
        loadImages(img);
    });
}


