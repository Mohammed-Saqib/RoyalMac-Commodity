$(document).ready(function(){
    $(".menu-icon").click(function(){
      $(".menu").toggleClass("activated-menu")
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        dots: true,
        slideSpeed: 200,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
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

const timeine = gsap.timeline({defaults: {duration : 4 }})
timeine
.to('.crousel-img img',{opacity : 0.6, ease : 'power3.out' })
.from('.crousel-content',{opacity : 0, duration:6, scale : 0,  ease : 'elastic'},'-=3')
.to('.crousel-content',{opacity : 1, delay : 3, duration: 4, scale : 0, opacity : 0, ease : 'power3.out'})
.to('.crousel-img img',{opacity : 1, ease : 'power3.out' },'-=2')



