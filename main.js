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
    // for (let data of dataAboutimages) {
    //     let dataImage = `${data.image}`;
    //     aboutImgs.src = dataImage;
    //     console.log("images: " + data.image);
    // }

    for (let x = 0; x < dataAboutimages.length; x++) {
        const element = '<img src="' + dataAboutimages[0] + '">'
        aboutImgs.innerHTML += element;
    }
    
    // for (let pic of dataAboutimages) {
    //     const htmlImg = document.createElement("img");
    //     htmlImg.className = "aboutImg";
    //     htmlImg.innerHTML = `
    //         <img 
    //             src="${pic.image}" 
    //             alt="gym2" 
    //             class="img-fluid rounded-4 aboutImg"
    //         >
    //     `;
    //     aboutImgs.appendChild(htmlImg);
        
    // }
    // for (let pic of dataAboutimages) {
    //     aboutImgs.src = `${pic.image}`
    // }
    console.log(aboutImgs);
    // aboutImgs.src += dataImage;
    // aboutImgs.src = "images/gym25.jpeg";

    console.log("hello");
}



// addEventListener for seeMore;
seeMoreAbout.addEventListener("click", seeMoreAboutPara);
// addEventListen for aboutImg;
aboutImgs.addEventListener("click", aboutImages);

const dataAboutimages = [
    {
        id: "0",
        name: "gym_23",
        image: "images/gym23.jpeg"
    },
    {
        id: "0",
        name: "gym_23",
        image: "images/gym25.jpeg"
    },
    {
        id: "0",
        name: "gym_23",
        image: "images/gym26.jpeg"
    },
    {
        id: "0",
        name: "gym_23",
        image: "images/gym27.jpeg"
    },
]

let text = "";
// for (let data of dataAboutimages) {
//     for (const key in data) {
//         text += data[key];
        
//         console.log(key + ": " + data[key]);
//     }
// }

// for (let data of dataAboutimages) {
//     function aboutImages() {
//         aboutImgs.src = `image; ${data.image}`;
//     }

//     console.log("image: " + data.image);
// }
// console.log(text);

console.log(dataAboutimages);
console.log(dataAboutimages[1].image)

