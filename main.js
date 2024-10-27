// gyn projects;
const seeMoreAbout = document.querySelector(".seeMorePara");
const aboutPara = document.querySelector(".aboutPara2");
const aboutImgs = document.querySelector(".aboutImg");
const serviceColoumn = document.querySelector("#service-right-coloumn");
const pricePlan = document.querySelector("#pricePlan");

const screenLogX = window.innerWidth;
let currentIndex = 0;

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
        "images": "images/gym29.jpg"
    }
];

const priceCards = [
    {
        exchange: "$",
        price : "15",
        type: "day",
        category: "15 day Trainning",
        description: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
        ]
    },
    {
        exchange: "$",
        price : "27",
        type: "month",
        category: "One month Trainning",
        description: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            
        ]
    },
    {
        exchange: "$",
        price : "35",
        type: "3-month",
        category: "3 month plan Trainning",
        description: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            
        ]
    },
    {
        exchange: "$",
        price : "65",
        type: "6-month",
        category: "6 month plan Trainning",
        description: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            
        ]
    },
    {
        exchange: "$",
        price : "120",
        type: "day",
        category: "1 year plan Trainning",
        description: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            
        ]
    },
    {
        exchange: "$",
        price : "160",
        type: "day",
        category: "1.6 year Trainning",
        description: [
           "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
        ]
    },
]


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

// service offer 
offerCategories.forEach((item) => {
    // serviceColoumn.innerHTML += `${item.title} <br>`;
    // serviceColoumn.textContent += `${item.para} <br>`;
    const service = document.createElement("div");
    // test.className = "cardTest";
    service.innerHTML = `
        <div 
            id="service-right"
            class="card service-card bg-transparent p-2 list-group-flush" 
            style="border: none;"
        >
            <div 
                class="row align-items-center service-card-body rounded-3"
            >
                <div 
                    class="col-md-7 text-white"
                >
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
    serviceColoumn.appendChild(service);
    console.log(item.title, item.images);
})

// pricing table
    priceCards.forEach((prices) => {
        // pricePlan.innerHTML = `${prices.type}`;
        const price = document.createElement("div");
        price.innerHTML = `
        
            <div class="col-md-4 test12">
                <div 
                    class="card text-center bg-dark border-0 rounded-4 price-plan-one">
                    <div class="card-header text-light pt-5">
                        <h4>
                            ${prices.exchange}
                            <span class="fs-1">${prices.price}</span>
                            <span>/${prices.type}</span>
                        </h4>
                    </div>
                    <div 
                        class="alert bg-warning rounded-0 fw-bold fs-5 tex" 
                        style="letter-spacing: 3px;"
                    >
                        ${prices.category}
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-transparent text-light my-2 border-bottom" >
                                ${prices.description[1]}       
                            </li> 
                            <li class="list-group-item bg-transparent text-light my-2 border-bottom" >
                                ${prices.description[2]}      
                            </li>
                            <li class="list-group-item bg-transparent text-light my-2 border-bottom" >
                                ${prices.description[3]}     
                            </li>
                            <li class="list-group-item bg-transparent text-light my-2 border-bottom" >
                                ${prices.description[4]}      
                            </li>  
                            <li class="list-group-item bg-transparent text-light my-2 border-bottom" >
                                ${prices.description[0]}      
                            </li>     
                        </ul>
                    </div>
                </div>
            </div>
        
        `;
        pricePlan.appendChild(price);
        
        // console.log(price);
    
    })

// serviceColoumn.style.border = "2px solid green";
serviceColoumn.style.height = "536px";

// addEventListener for seeMore;
seeMoreAbout.addEventListener("click", seeMoreAboutPara);
// addEventListen for aboutImg;
aboutImgs.addEventListener("click", aboutImages);

console.log(dataAboutimages);
console.log(priceCards)
console.log(priceCards[1].type);
console.log(priceCards[1].description[0]);

