// Todays Current Date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var todaysWeekDay = days[d.getDay()];
var todaysDay = d.getDate();
var todaysMonth = months[d.getMonth()];
var todaysYear = d.getFullYear();

var fullDate = todaysWeekDay + ", " + todaysDay + " " + todaysMonth + " " + todaysYear;

// console.log(fullDate);
document.getElementById("currentDate").innerHTML = fullDate;


// Toggle Function
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//Current Year
var todaysDate = new Date();
var todaysYear = todaysDate.getFullYear();
// console.log(todaysYear);
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


