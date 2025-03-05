const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentIndex = 0; //index pour switcher d'img

const bannerImg = document.querySelector(".banner-img"); 
const bannerText = document.querySelector("#banner p"); 
const leftArrow = document.querySelector(".arrow_left"); 
const rightArrow = document.querySelector(".arrow_right"); 


// fleche gauche + recul
leftArrow.addEventListener("click", () => {
    console.log("Flèche gauche cliquée !");  
	if (currentIndex === 0){
		currentIndex = slides.length-1;
	}
	else {
		currentIndex=currentIndex-1;
	}
	changeSlide(currentIndex);
	console.log(currentIndex)
});

// fleche droit + avance
rightArrow.addEventListener("click", () => {
    console.log("Flèche droite cliquée !");
	if (currentIndex === slides.length-1){
		currentIndex = 0;
	}
	else {
		currentIndex=currentIndex+1;
	}
	changeSlide(currentIndex);
	console.log(currentIndex)

});

const dots = document.querySelector('#banner .dots');

for (let i=0; i<slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add("dot");
    dots.append(dot);
    
    if(currentIndex === i) {
        dot.classList.add("dot_selected");
    }
}
const dotsElements = document.querySelectorAll('.dots .dot');

dotsElements.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        changeSlide(currentIndex);
    });
});


function dotSelected(currentIndex) {
    const dot = document.querySelectorAll('.dots .dot');

    for (let i=0; i<dot.length; i++) {
        dot[i].classList.remove("dot_selected");
        if(i === currentIndex) dot[i].classList.add("dot_selected");
    }
}

function changeSlide(currentIndex) {
    // mise a jour image
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

    // mise a jour texte
    bannerText.innerHTML = slides[currentIndex].tagLine;

    // mise a jour bullet
    dotSelected(currentIndex);
}
