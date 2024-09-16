// gyn projects;
const seeMoreAbout = document.querySelector(".seeMorePara");
const aboutPara = document.querySelector(".aboutPara2");
const aboutImgs = document.querySelector(".aboutImg");

const screenLogX = window.innerWidth;


// function for seeMoreAboutPara;
function seeMoreAboutPara() {
    aboutPara.classList.toggle("active");
    console.log("aboutPara");
}
if(screenLogX < 440) {
    seeMoreAbout.style.display = "block";
    console.log("hide");
}
else {
    seeMoreAbout.style.display = "none";
}

// function for aboutImgs;
function aboutImages() {
    // aboutImgs.src = "images/gym25.jpeg";

    console.log("hello");
}



// addEventListener for seeMore;
seeMoreAbout.addEventListener("click", seeMoreAboutPara);
// addEventListen for aboutImg;
aboutImgs.addEventListener("click", aboutImages);

const dataAboutimages = {
    "items" : [
        {
            "id": 0,
            "title": "image_1",
            "src": "images/gym23.jpeg"
        },
        {
            "id": 1,
            "title": "image_1",
            "src": "images/gym25.jpeg"
        },
        {
            "id": 2,
            "title": "image_2",
            "src": "images/gym26.jpeg"
        },

    ]
}