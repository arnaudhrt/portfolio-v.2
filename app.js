const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.box-lines');
const allItemPort = document.querySelectorAll('.item');
const widthDisplay = screen.width;

allItemPort.forEach( item => {
    if(widthDisplay > '1500' ){
        allItemPort[2].classList.replace('vague2', 'vague1');
        allItemPort[4].classList.replace('vague3', 'vague2');
        allItemPort[5].classList.replace('vague3', 'vague2');
    }
})

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
})

allItemNav.forEach( item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('menu-visible');
        ligne.classList.toggle('active');
    })

})

// Animation écriture accueil 

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim,  {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Freelance')
.pauseFor(300)
.typeString(' - Spécialisée en <span style="color: #03CDFF;"> React</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #90C53F;"> Vue.js</span> !')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: #fbb124;"> JavaScript</span> !')
.start()

// Animation label input


 const input_fields = document.querySelectorAll('input');

 for(let i = 0; i < input_fields.length; i++) {

      let field = input_fields[i];

      field.addEventListener('input', (e) => {
          if(e.target.value !== ''){
              e.target.parentNode.classList.add('animation')
          } else if (e.target.value == ''){
              e.target.parentNode.classList.remove('animation')
          }
      })

 }

// Scene accueil 

const controller = new ScrollMagic.Controller();

const mainContainer = document.querySelector('#accueil');
const navBtn = document.querySelector('.btn-menu');
const mainTitre = document.querySelector('h1');
const nameTitre = document.querySelector('.name-titre');

const TL1 = gsap.timeline({paused: true});

TL1
    .from(nameTitre, {y: -100, opacity: 0, ease: Power3.easeOut, duration: 1.2})
    .from(mainTitre, {y: -100, opacity: 0, ease: Power3.easeOut, duration: 0.8}, '-=0.30')
    .from(navBtn, {x: -10, opacity: 0, ease: Power3.easeOut, duration: 0.8})

window.addEventListener('load', () => {
    TL1.play();
})

const scene1 = new ScrollMagic.Scene({
    triggerElement: mainContainer,
    triggerHook: 'onLeave',
    reverse: false
})
    .setPin('#accueil')
    .addTo(controller)

// Scene profil

const profilContainer = document.querySelector('#profil');
const profilTitre = document.querySelector('.profil-titre');
const profilSousTitre = document.querySelector('.profil-soustitre');
const profilHr = document.querySelector('.profil-hr');
const profilText = document.querySelector('.profil-text');
const profilImg = document.querySelector('.profil-img');
const profilBtn = document.querySelector('.btn-download-cv');

const TLP = new TimelineMax();

TLP
    .from(profilTitre, {y: -100, opacity: 0, duration: 0.6})
    .from(profilSousTitre, {y:-20, opacity: 0, duration: 0.6}, '-=0.4')
    .from(profilHr, {y: -10, opacity: 0, duration: 0.4}, '-=0.4')
    .from(profilText, {y: -20, opacity: 0, duration: 0.5})
    .from(profilImg, {y: -20, opacity: 0, duration: 0.5}, '-=0.5')
    .from(profilBtn, {y: -10, opacity: 0, duration: 0.8})

const scene2 = new ScrollMagic.Scene({
    triggerElement: profilContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(TLP)
    .addTo(controller)

// Scene social bar 
const scene21 = new ScrollMagic.Scene({
    triggerElement: profilContainer,
    triggerHook: 0.2,
    reverse: true
})
    .setClassToggle('.social-bar', 'visible')
    .addTo(controller)

//Scene skills

const skillsContainer = document.querySelector('#skills');
const skillsTitre = document.querySelector('.skills-titre');
const skillsSousTitre = document.querySelector('.skills-soustitre');
const skillsHr = document.querySelector('.skills-hr');
const skillsHeader = document.querySelector('.skills-header');

const TLS = new TimelineMax();

TLS
    .from(skillsTitre, {y: -100, opacity: 0, duration: 0.6})
    .from(skillsSousTitre, {y:-20, opacity: 0, duration: 0.6}, '-=0.4')
    .from(skillsHr, {y: -10, opacity: 0, duration: 0.4}, '-=0.4')
    .from(skillsHeader, {y: -20, opacity: 0, duration: 0.5})

const scene3 = new ScrollMagic.Scene({
    triggerElement: skillsContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(TLS)
    .addTo(controller)


const scene31 = new ScrollMagic.Scene({
    triggerElement: skillsContainer,
    triggerHook: 0.5,
    reverse: false
})
    
    .on("start", function () {
        var bar = new ProgressBar.Circle('#progressBar1', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#fbb124',
            trailColor: '#191c23',
            trailWidth: 0,
            svgStyle: {
                display: 'block'
            },
            text: {
                value: '<i class="fab fa-react fa-3x"></i>'
            }
          });
          bar.text.style.color = '#7a89ab'
          bar.text.style.fontSize = '3em'
          setTimeout( () => {bar.animate(1.0)}, 2000)
          
    }) 
    .on("start", function () {
        var bar = new ProgressBar.Circle('#progressBar2', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#fbb124',
            trailColor: '#191c23',
            trailWidth: 0,
            svgStyle: null,
            text: {
                value: '<i class="fab fa-node-js fa-3x"></i>'
            }
          });
          bar.text.style.color = '#7a89ab'
          bar.text.style.fontSize = '3em'
          setTimeout( () => {bar.animate(1.0)}, 2000)
    })
    .on("start", function () {
        var bar = new ProgressBar.Circle('#progressBar3', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#fbb124',
            trailColor: '#191c23',
            trailWidth: 0,
            svgStyle: null,
            text: {
                value: '<i class="fab fa-app-store fa-3x"></i>'
            }
          });
          bar.text.style.color = '#7a89ab'
          bar.text.style.fontSize = '3em'
          setTimeout( () => {bar.animate(1.0)}, 2000)
    })
    .addTo(controller)

// section portfolio

const portContainer = document.querySelector('#portfolio');
const portTitre = document.querySelector('.portfolio-titre');
const portSousTitre = document.querySelector('.portfolio-soustitre');
const portHr = document.querySelector('.portfolio-hr');
const portItem1 = document.querySelectorAll('.vague1');
    
const TLPF1 = new TimelineMax();

TLPF1
    .from(portTitre, {y: -100, opacity: 0, duration: 0.6})
    .from(portSousTitre, {y:-20, opacity: 0, duration: 0.6}, '-=0.4')
    .from(portHr, {y: -10, opacity: 0, duration: 0.4}, '-=0.4')
    .staggerFrom(portItem1, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: portContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(TLPF1)
    .addTo(controller)

const scene41 = new ScrollMagic.Scene({
    triggerElement: portContainer,
    triggerHook: 0.05,
    reverse: true
})
    .setClassToggle(".ligne-unique", 'ligne-sombre')
    .addTo(controller)

// Vague 2

const portItem2 = document.querySelectorAll('.vague2');
    
const TLPF2 = new TimelineMax();

TLPF2
    .staggerFrom(portItem2, 1, {opacity: 0}, 0.2, '-=0.5')

let scene5 = new ScrollMagic.Scene({
    triggerElement: portItem1,
    triggerHook: 0.2,
    reverse: false
})
    .setTween(TLPF2)
    .addTo(controller)

// Vague 3

const portItem3 = document.querySelectorAll('.vague3');
const TLPF3 = new TimelineMax();

TLPF3
    .staggerFrom(portItem3, 1, {opacity: 0}, 0.2, '-=0.5')

let scene6 = new ScrollMagic.Scene({
    triggerElement: portItem2,
    triggerHook: 0.2,
    reverse: false
})
    .setTween(TLPF3)
    .addTo(controller)

//scene contact

const finPortfolio = document.querySelector('#contact');
const btnLigne = document.querySelector('.ligne-unique');

const scene7 = new ScrollMagic.Scene({
    triggerElement: finPortfolio,
    triggerHook: 0.23,
    reverse: true
})  
    .on('start', () => {
        //scene41.removeClassToggle(true);
        btnLigne.classList.remove('ligne-sombre');
    })
    .on('leave', () => {
        btnLigne.classList.add('ligne-sombre');
    })
    .addTo(controller)