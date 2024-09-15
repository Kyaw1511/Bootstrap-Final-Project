// gyn projects;
const seeMoreAbout = document.querySelector(".seeMorePara");
const aboutPara = document.querySelector(".aboutPara2");
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


// addEventListener for seeMore;
seeMoreAbout.addEventListener("click", seeMoreAboutPara);