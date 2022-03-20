$(document).ready(function(){
    $(".menu-icon img").click(function(){
      $(".menu").toggleClass("activated-menu")
      const close = document.querySelector('.activated-menu');
      if(close == null){
          document.querySelector('.menu-icon img').setAttribute('src','../Images/SVG/menu.svg')
      }else{
        document.querySelector('.menu-icon img').setAttribute('src','../Images/SVG/close.svg') 
      }    
    });
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:15,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        dots: true,
        // slideSpeed: 200,
        autoplayHoverPause:true,
        autoplayTimeout: 2520,
        smartSpeed: 1500,
        responsive:{
            150:{
                items:1,
                nav:true
            },
            450:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            750:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
});

const timeline = gsap.timeline({defaults: {duration : 4 }})
timeline
.to('.crousel-img img',{opacity : 0.6, ease : 'power3.out' })
.from('.crousel-content',{opacity : 0, duration:6, scale : 0,  ease : 'elastic'},'-=3')
.to('.crousel-content',{opacity : 1, delay : 3, duration: 4, scale : 0, opacity : 0, ease : 'power3.out'})
.to('.crousel-img img',{opacity : 1, ease : 'power3.out' },'-=2');


let actList1 = document.querySelector('.list1');
let actList2 = document.querySelector('.list2');
let actList3 = document.querySelector('.list3');
let actList4 = document.querySelector('.list4');
let actList5 = document.querySelector('.list5');
let actList6 = document.querySelector('.list6');
let actList7 = document.querySelector('.list7');

let content1 = document.querySelector('.content-1');
let content2 = document.querySelector('.content-2');
let content3 = document.querySelector('.content-3');
let content4 = document.querySelector('.content-4');
let content5 = document.querySelector('.content-5');
let content6 = document.querySelector('.content-6');
let content7 = document.querySelector('.content-7');

actList1.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content1.className += " unhide";
    gsap.from(content1, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

actList2.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content2.className += " unhide";
    gsap.from(content2, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

actList3.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content3.className += " unhide";
    gsap.from(content3, { opacity:0, duration : 3, ease : 'power2.inOut' });

});

actList4.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content4.className += " unhide";
    gsap.from(content4, { opacity:0, duration : 3, ease : 'power2.inOut' });

});

actList5.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content5.className += " unhide";
    gsap.from(content5, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

actList6.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content6.className += " unhide";
    gsap.from(content6, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

actList7.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content7.className += " unhide";
    gsap.from(content7, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

