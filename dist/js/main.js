$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        stagePadding: 100,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
      
       
    });
  });

  var hoverDistort = new hoverEffect({
    parent: document.querySelector('.hero__left'),
    intensity: 0.5,
    image1: 'img/pic-1.jpg',
    image2: 'img/pic-2.jpg',
    displacementImage: 'img/4.png'
});

  var hoverDistort = new hoverEffect({
    parent: document.querySelector('.hero__right'),
    intensity: 0.5,
    image1: 'img/pic-3.jpg',
    image2: 'img/pic-4.jpg',
    displacementImage: 'img/4.png'
});


const  imgs = document.querySelectorAll(".suits__show img");
const  show = document.querySelector(".suits__container");


console.log(imgs)


show.addEventListener("mouseover", (e) =>{

  // 

  if(e.target.matches(".img-suit")){
    blur()
    e.target.classList.remove('blur')
  }
})

show.addEventListener("mouseout", (e) =>{

  // 

  if(e.target.matches(".img-suit")){
    blurRemove()
  }
})

function blur(){
  imgs.forEach(item =>{


    item.classList.add('blur')
  
  })
}
function blurRemove(){
  imgs.forEach(item =>{


    item.classList.remove('blur')
  
  })
}

const ham = document.querySelector(".nav__hamburger");
const navLink = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links li");
const load = document.querySelector(".loader");



ham.addEventListener("click", () =>{


  ham.classList.toggle("trans")
  navLink.classList.toggle("open");
  navLinks.forEach(link =>{


    link.classList.toggle("fade")

  })

})


window.addEventListener("load", () =>{
  

  load.style.display = 'none';

})







