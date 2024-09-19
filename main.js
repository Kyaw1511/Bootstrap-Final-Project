// gyn projects;
const seeMoreAbout = document.querySelector(".seeMorePara");
const aboutPara = document.querySelector(".aboutPara2");
const aboutImgs = document.querySelector(".aboutImg");

const screenLogX = window.innerWidth;
let currentIndex = 0;

// function for seeMoreAboutPara;
function seeMoreAboutPara() {
    aboutPara.classList.toggle("active");
    console.log("aboutPara");
}

// function for aboutImgs;
function aboutImages() {
    currentIndex = (currentIndex + 1) % dataAboutimages.length; 
    aboutImgs.src = dataAboutimages[currentIndex]; 

    console.log("hello");
}

// mobile site version
if(screenLogX < 440) {
    seeMoreAbout.style.display = "block";
    console.log("hide");
}
else {
    seeMoreAbout.style.display = "none";
}

// addEventListener for seeMore;
seeMoreAbout.addEventListener("click", seeMoreAboutPara);
// addEventListen for aboutImg;
aboutImgs.addEventListener("click", aboutImages);

let dataAboutimages = [
    "images/gym26.jpeg",
    "images/gym27.jpeg",
    "images/gym25.jpeg",
    "images/gym23.jpeg",
    "images/gym2.jpeg"
];

console.log(dataAboutimages);

