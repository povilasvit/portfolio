//

//Acordion variables
const accordionItems = document.querySelectorAll('.accordionItem');
const accordionHide = document.querySelectorAll('.accordionHide');
const accordionP = document.querySelectorAll('.accordionP');
const accordionArrow = document.querySelectorAll('.fa-chevron-left');


// Accordion 
accordionItems.forEach((e, index) => 
	e.addEventListener('click', () => {
			accordionHide[index].classList.toggle('active');
			accordionItems[index].classList.toggle('activeBg');
			accordionArrow[index].classList.toggle('arrowRotate');
		}
	)
)
// GSAP Animation /////////////////////
//Page Animation
// gsap.registerPlugin(ScrollTrigger);

if(screen.width > 1000){
	//Menu, Profile photo and Accordion animation
	gsap.from('.firstName', { duration: 0.7, opacity: 0, ease: "ease", delay: 1});
	gsap.from('.firstName', { duration: 0.5, y: '-250%', ease: "ease", delay: 1});
	gsap.from('.lastName', { duration: 0.7, opacity: 0, ease: "ease", delay: 0.5});
	gsap.from('.lastName', { duration: 0.5, y: '-250%', ease: "ease", delay: 0.5});

	gsap.from('.myPhoto', { duration: 1, opacity: 0, ease: "ease", delay: 1.5});
	gsap.from('.myPhoto', { duration: 1, y: '-10%', ease: "power3", delay: 1.5});
	gsap.from('.photoSide', { duration: 2, width: '100vw', ease: "ease", delay: 3});
	gsap.from('.accordionSide', { duration: 2, width: '0vw', ease: "ease", delay: 3});

	gsap.from('#accordionElement', { duration: 1, opacity: 0, ease: "ease", stagger: 0.3, delay: 5});
	gsap.from('#accordionElement', { duration: 3, x: '100%', ease: "bounce", stagger: 0.3, delay: 5});

	gsap.from('.navListItem', { duration: 3, opacity: 0, ease: "ease", stagger: -0.3, delay: 9});

	//Projects Section
	//First Project
	projectAnimation('#project1', '-30%', '#project1Btns'); 
	projectAnimation('#project2', '30%', '#project2'); 
	projectAnimation('#project3', '-30%', '#project3'); 

}
if(screen.width < 1001){
	// Photo and Name reveal
	gsap.from('.firstName', { duration: 0.7, opacity: 0, ease: "ease", delay: 1});
	gsap.from('.firstName', { duration: 0.5, y: '-250%', ease: "ease", delay: 1});
	gsap.from('.lastName', { duration: 0.7, opacity: 0, ease: "ease", delay: 0.5});
	gsap.from('.lastName', { duration: 0.5, y: '-250%', ease: "ease", delay: 0.5});
	gsap.from('.myPhoto', { duration: 1, opacity: 0, ease: "ease", delay: 1.5});
	gsap.from('.myPhoto', { duration: 1, y: '-10%', ease: "power3", delay: 1.5});
	// Accordion reveal 
	gsap.from('.accordionHideH3', {scrollTrigger: '#accordionElement', duration: .7, opacity: 0, ease: 'ease'})
	gsap.from('#accordionElement', {scrollTrigger: '#accordionElement', duration: 2, opacity: 0, ease: "ease", stagger: 0.3})
	gsap.from('#accordionElement', {scrollTrigger: '#accordionElement', duration: 3, x: '100%', ease: "bounce", stagger: 0.3})

	//Projects Section
	//First Project 
	projectAnimation('#project1', '-30%', '#project1'); 
	projectAnimation('#project2', '30%', '#project2'); 
	projectAnimation('#project3', '-30%', '#project3');
}



// Responsive Nav Menu


gsap.from('.hamburgerStick', { duration: 1, x: "300%", ease: "elastic", delay: 2, stagger: .1});

const hamburger = document.querySelector('.hamburger');
const hamburgerStickMiddle = document.querySelector('.hamburgerStickMiddle');
const hamburgerStickTop = document.querySelector('.hamburgerStickTop');
const hamburgerStickBottom = document.querySelector('.hamburgerStickBottom');
let clicked = 0;

hamburger.addEventListener('click', () => {
			if(clicked === 0){
			clicked = 1;
			hamburgerBg('0%');
			menuOpacity(1, 1.3);

			hamburgerMiddleStick(0, 0);
			hamburgerStickMove(hamburgerStickTop, '0.65rem', 0.25);
			hamburgerStickMove(hamburgerStickBottom, '-0.65rem', 0.25);
			hamburgerStickRotate(hamburgerStickTop, 45, .5);
			hamburgerStickRotate(hamburgerStickBottom, -45, .5);
			hamburgerRotation(360 , .75);
		} else {
			clicked = 0;
			hamburgerBg('100%');
			menuOpacity(0);

			hamburgerMiddleStick(1, .75);
			hamburgerStickMove(hamburgerStickTop, '0rem', 1);
			hamburgerStickMove(hamburgerStickBottom, '0rem', 1);
			hamburgerStickRotate(hamburgerStickTop, 0, .25);
			hamburgerStickRotate(hamburgerStickBottom, 0, .25);
			hamburgerRotation(-360, 0);
		}
	}
)

function hamburgerBg(a){
	gsap.to('.hamburgerBg', { duration: 1.2, x: a, ease: 'bounce'});
}
function menuOpacity(a, b){
	gsap.to('.navRespUlLi', { duration: 1.2, opacity: a, ease: "power3.out", delay: 1.3, stagger: 0.3});
}

// hamburger Icon
function hamburgerMiddleStick(a, b){
	gsap.to('.hamburgerStickMiddle', { duration: 0.5, opacity: a, ease: 'ease', delay: b});
}
function hamburgerStickMove(a, b, c){
	gsap.to(a, { duration: 0.5, y: b, ease: 'ease', delay: c});
}
function hamburgerStickRotate(a, b, c){
	gsap.to(a, { duration: .5, rotation: b, ease: 'ease', delay: c});
}
function hamburgerRotation(a, b){
	gsap.to('.hamburger', {duration: 1, rotation:a, transformOrigin:"50% 50%", delay: b});
}
//
function projectAnimation(a, b, c){
	gsap.from(a, {scrollTrigger: c, duration: 1, opacity: 0, ease: "ease", stagger: 0.3})
	gsap.from(a, {scrollTrigger: c, duration: 2, x: b, ease: "back", stagger: 0.3})
}