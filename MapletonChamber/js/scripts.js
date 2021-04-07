// Todays Current Date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var todaysWeekDay = days[d.getDay()];
var todaysDay = d.getDate();
var todaysMonth = months[d.getMonth()];
var todaysYear = d.getFullYear();

var fullDate = todaysWeekDay + ", " + todaysDay + " " + todaysMonth + " " + todaysYear;


document.getElementById("currentDate").innerHTML = fullDate;


// Toggle Function
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//Current Year
var todaysDate = new Date();
var todaysYear = todaysDate.getFullYear();

document.getElementById("currentYear").innerHTML = todaysYear;


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


if ('IntersectionObserver' in window) {
    

    const imgObserver = new IntersectionObserver((items) => {
        
        items.forEach((item) => {
           
            if (item.isIntersecting) {
               
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            } 
            
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        
        imgObserver.observe(img);  
    });
} else {
    imagesToLoad.forEach ((img) => {
        loadImages(img);
    });
}


