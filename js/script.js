let menubars= document.querySelector('#menu-bars');
let menu= document.querySelector('#menu');
let navlink = document.querySelectorAll('#navLink');

menubars.onclick = () =>{
    menu.classList.toggle('hidden');
    menubars.classList.toggle('fa-xmark');
}

window.onscroll = () => {
    menu.classList.add('hidden');
    menubars.classList.remove('fa-xmark');
}


navlink.forEach(link => {
    link.addEventListener('click', () =>{
        menu.classList.toggle('hidden');
        menubars.classList.toggle('fa-xmark');
    })
})



const userPics = document.getElementsByClassName('user-pic');
const userTexts  = document.getElementsByClassName('user-text');

function ShowReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text");
    }

    let i = Array.from(userPics).indexOf(event.target);
   
    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
}


const Togglebtn = document.getElementById('Togglebtn');

const card_1_front  = document.querySelector('#card_1_front');
const card_1_back  = document.querySelector('#card_1_back');
const card_2_front  = document.querySelector('#card_2_front');
const card_2_back  = document.querySelector('#card_2_back');
const card_3_front  = document.querySelector('#card_3_front');
const card_3_back  = document.querySelector('#card_3_back');

Togglebtn.addEventListener('change', () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180')
});

const button = document.querySelector('.back-to-top');
window.onscroll= () => {
    if (window.scrollY > 200) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
    };

    document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });



 /* Initialize Swiper */

var swiper = new Swiper(".mySwiper", {
effect: "cards",
grabCursor: true,
});


/*Animation js */
$(document).ready(function() {
    let offset  = {offset:"80%"}
 $(".first-paragraph").waypoint(function(){
    $(".first-paragraph").addClass(
     "animate__animated animate__fadeInLeft"
    );
 }, 
 offset
 );
 
 $(".swiper").waypoint(function(){
    $(".swiper").addClass(
     "animate__animated animate__fadeInUp"
    );
 }, 
 offset
 );

 $(".card1").waypoint(function(){
    $(".card1").addClass(
     "animate__animated animate__fadeInLeft"
    );
 }, 
 offset
 );
 
 $(".card2").waypoint(function(){
    $(".card2").addClass(
     "animate__animated animate__fadeInUp"
    );
 }, 
 offset
 );

 $(".card3").waypoint(function(){
    $(".card3").addClass(
     "animate__animated animate__fadeInRight"
    );
 }, 
 offset
 );
 
 
 $(".post-card").waypoint(function(){
    $(".post-card").addClass(
     "animate__animated animate__backInUp"
    );
 }, 
 offset
 );
 
 })