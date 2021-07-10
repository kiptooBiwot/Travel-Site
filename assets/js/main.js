/*=================== SHOW MENU =================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


/*=================== MENU SHOW =================*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=================== MENU HIDDEN =================*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=================== REMOVE MENU MOBILE =================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=================== CHANGE BACKGROUND HEADER =================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=================== SWIPER DISCOVER =================*/
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
    slidesPerView: "auto",
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

/*===================== VIDEO ==========================*/
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

const playPause = () => {
    if (videoFile.paused) {
        // Play video
        videoFile.play()

        // Change icon to show pause
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        if (videoFile.play) {
          // Pause video
          videoFile.pause();

          // Change icon to show play
          videoIcon.classList.add("ri-play-line");
          videoIcon.classList.remove("ri-pause-line");
        }
    }
}

videoButton.addEventListener('click', playPause)

const finalVideo = () => {
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// endedm when the video ends
videoFile.addEventListener('ended', finalVideo)


/*===================== SHOW SCROLL UP ==========================*/


/*===================== SCROLL SECTIONS ACTIVE LINK ==========================*/


/*===================== SCROLL REVEAL ANIMATION ==========================*/


/*===================== DARK LIGHT THEME ==========================*/

