$(document).ready(function(){
    $(".menu-icon").click(function(){
      $(".menu").toggleClass("activated-menu")
    });
});

const timeine = gsap.timeline({defaults: {duration : 4 }})
timeine
.to('.crousel-img img',{opacity : 0.6, ease : 'power3.out' })
.from('.crousel-content',{opacity : 0, duration:6, scale : 0,  ease : 'elastic'},'-=3')
.to('.crousel-content',{opacity : 1, delay : 3, duration: 4, scale : 0, opacity : 0, ease : 'power3.out'})
.to('.crousel-img img',{opacity : 1, ease : 'power3.out' },'-=2')



