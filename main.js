// gyn projects;
const seeMoreAbout = document.querySelector(".seeMorePara");
const aboutPara = document.querySelector(".aboutPara2");
const aboutImgs = document.querySelector(".aboutImg");
const serviceColoumn = document.querySelector("#service-right-coloumn");
const serviceRight = document.querySelector("#service-right");

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

// function for serviceRightDetails;
// function serviceRightDetails() {
//     offerCategories.forEach((item) => {
//         console.log(item.title, item.images);
//     })
//     console.log("serviceRightDetails Function");
// }



serviceColoumn.style.border = "2px solid green";
serviceColoumn.style.height = "1000px";

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
// addEventListen for serviceRight;
// serviceRight.addEventListener("click", serviceRightDetails);

let dataAboutimages = [
    "images/gym26.jpeg",
    "images/gym27.jpeg",
    "images/gym25.jpeg",
    "images/gym23.jpeg",
    "images/gym2.jpeg"
];

const offerCategories = [
    {
        "title": "Retail Merchandise",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia, deleniti consectetur, ut quaerat culpa optio fugit quas natus eligendi ullam soluta.",
        "images": "images/gym25.jpeg"
    },
    {
        "title": "Online Personal Training",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia, deleniti consectetur, ut quaerat culpa optio fugit quas natus eligendi ullam soluta.",
        "images": "images/gym23.jpeg"
    },
    {
        "title": "Personal Training",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia, deleniti consectetur, ut quaerat culpa optio fugit quas natus eligendi ullam soluta.",
        "images": "images/gym27.jpeg"
    },
    {
        "title": "Solo Camp",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia, deleniti consectetur, ut quaerat culpa optio fugit quas natus eligendi ullam soluta.",
        "images": "images/gym2.jpeg"
    },
    {
        "title": "Q & A section",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia, deleniti consectetur, ut quaerat culpa optio fugit quas natus eligendi ullam soluta.",
        "images": "images/gym35.jpeg"
    }
]
offerCategories.forEach((item) => {
    // serviceColoumn.innerHTML += `${item.title} <br>`;
    // serviceColoumn.textContent += `${item.para} <br>`;
    const test = document.createElement("div");
    test.className = "card";
    test.innerHTML = `
        <div 
            id="service-right"
            class="card service-card overflow-hidden bg-transparent p-2 list-group-flush" 
            style="border: none;"
        >
            <div class="row align-items-center service-card-body rounded-3">
                <div 
                    class="col-md-7 text-white">
                    <h5 style="text-align: center;">
                        ${item.title}
                    </h5>
                    <p style="text-align: justify;">
                        ${item.para}
                    </p>
                </div>  
                <div 
                    class="col-md-5" 
                    style="text-align: center;"
                >
                    <img 
                        src="${item.images}" 
                        alt="gym25" 
                        class="border border-2 border-warning"
                    >
                </div>
            </div>
        </div>
    `;
    serviceColoumn.appendChild(test);
    console.log(item.title, item.images);
})


console.log(dataAboutimages);

