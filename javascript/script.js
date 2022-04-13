$(document).ready(function(){
    $(".menu-icon img").click(function(){
      $(".menu").toggleClass("activated-menu")
      setTimeout(function (){
        $(".menu").removeClass("activated-menu")
        const close = document.querySelector('.activated-menu');
      if(close == null){
          document.querySelector('.menu-icon img').setAttribute('src','./Images/SVG/menu.svg')
      }else{
        document.querySelector('.menu-icon img').setAttribute('src','./Images/SVG/close.svg') 
      } 
      },10000)
      const close = document.querySelector('.activated-menu');
      if(close == null){
          document.querySelector('.menu-icon img').setAttribute('src','./Images/SVG/menu.svg')
      }else{
        document.querySelector('.menu-icon img').setAttribute('src','./Images/SVG/close.svg') 
      }    
    });
});


$(document).ready(function(){
    $('.business-grp-content').owlCarousel({
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

function startAnimation(){
const tl= gsap.timeline({repeat: -1, repeatDelay: 4, defaults: {duration : 4 }})
tl
.from('.slide1',{opacity : 0, ease:'power3.out' })
.from('.slide2',{opacity : 0, ease:'power3.out' })
.from('.slide3',{opacity : 0, ease:'power3.out' })
}


setTimeout(function(){
   $(document).ready(function(){
       $('.slide').each(function(index, value){
        $(value).addClass('wait')
       });
       $('.crousel-head').addClass('no-wait')
   });
   startAnimation();
},2500)


// welcome message animation code
// const timeline = gsap.timeline({defaults: {duration : 3 }, onComplete : startAnimation})
// timeline
// .from('.crousel-content',{opacity : 0, ease : 'power3.in'},'<-1')
// .from('.crousel-content h1',{opacity : 0, delay:3, scale: 0, duration:2, ease : 'power3.out'},'<-1')
// .to('.crousel-content h1',{opacity : 0, delay:2, scale: 0, duration: 3, ease : 'power3.out'})
// .to('.crousel-content',{opacity : 1, duration: 3, opacity : 0, ease : 'power3.out'},'<1');

const t4 = new gsap.timeline({repeat : -1, repeatDelay : 10})
t4
.to('#construction', {scale: 0.8})
.from('#construction', {y : -250, ease : 'elastic.out', duration: 2,})
// .to('#construction', {rotateY: '360deg', ease : 'power3.in', delay:2, duration: 3, stagger : {
//     each : 1,
// }})
// .to('#construction', {y:-200, ease : 'power3.in', scale: 0.8, duration: 1, stagger : {
//     each : 1,
// }})

const nImport = document.getElementById('nImport');
const nBusCon = document.getElementById('nBusCon');
const nJoinV = document.getElementById('nJoinV');
const nStockist = document.getElementById('nStockist');
const nMerchen = document.getElementById('nMerchen');
const nTrading = document.getElementById('nTrading');

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

// ----------------------Navbar Area To Activity Area ---------------

nImport.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content2.className += " unhide";
    gsap.from(content2, { opacity:0, duration : 3, ease : 'power2.inOut' });
});
nBusCon.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content3.className += " unhide";
    gsap.from(content3, { opacity:0, duration : 3, ease : 'power2.inOut' });
});
nJoinV.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content4.className += " unhide";
    gsap.from(content4, { opacity:0, duration : 3, ease : 'power2.inOut' });
});
nStockist.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content5.className += " unhide";
    gsap.from(content5, { opacity:0, duration : 3, ease : 'power2.inOut' });
});
nTrading.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content6.className += " unhide";
    gsap.from(content6, { opacity:0, duration : 3, ease : 'power2.inOut' });
});
nMerchen.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('unhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" unhide", "");
    }
    content7.className += " unhide";
    gsap.from(content7, { opacity:0, duration : 3, ease : 'power2.inOut' });
});


//-----------------Activity Are------------------------->

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

// virtual stockiest card
let actLists1 = document.querySelector('.lists1');
let actLists2 = document.querySelector('.lists2');
let actLists3 = document.querySelector('.lists3');
let actLists4 = document.querySelector('.lists4');

let contents1 = document.querySelector('.contents-1');
let contents2 = document.querySelector('.contents-2');
let contents3 = document.querySelector('.contents-3');
let contents4 = document.querySelector('.contents-4');

actLists1.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('vunhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" vunhide", "");
    }
    contents1.className += " vunhide";
    gsap.from(contents1, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

actLists2.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('vunhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" vunhide", "");
    }
    contents2.className += " vunhide";
    gsap.from(contents2, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

actLists3.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('vunhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" vunhide", "");
    }
    contents3.className += " vunhide";
    gsap.from(contents3, { opacity:0, duration : 3, ease : 'power2.inOut' });

});

actLists4.addEventListener('click', () => {
    let unhide = document.getElementsByClassName('vunhide');
    if(unhide.length > 0){
        unhide[0].className =  unhide[0].className.replace(" vunhide", "");
    }
    contents4.className += " vunhide";
    gsap.from(contents4, { opacity:0, duration : 3, ease : 'power2.inOut' });

});


$(document).ready(function(){
    $('.cm-content').owlCarousel({
        margin:15,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        dots: true,
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
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
            },
            2000:{
                items:4,
                nav:true,
            }
        }
    });
});

$(document).ready(function(){
    $('.brd-card-container').owlCarousel({
        margin:15,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        dots: true,
        stagePadding:10,
        // slideSpeed: 200,
        autoplayHoverPause:true,
        autoplayTimeout: 2520,
        smartSpeed: 2500,
        responsive:{
            150:{
                items:1,
                nav:true
            },
            300:{
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


$(document).ready(function(){
    $('.advisory-card-container').owlCarousel({
        margin:15,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        dots: true,
        stagePadding:10,
        // slideSpeed: 200,
        autoplayHoverPause:true,
        autoplayTimeout: 2520,
        smartSpeed: 1500,
        responsive:{
            150:{
                items:1,
                nav:true
            },
            300:{
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
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});

let navBod = document.querySelector('.nav-bod')
let navAb = document.querySelector('.nav-ab')
let bod = document.querySelector('.board-of-director')
let ab = document.querySelector('.advisory-board')

navBod.addEventListener('click', () => {
    let boardUnhide = document.getElementsByClassName('board-unhide');
    if(boardUnhide.length > 0){
        boardUnhide[0].className =  boardUnhide[0].className.replace(" board-unhide", "");
    }
    bod.className += " board-unhide";
    gsap.from(bod, { opacity:0, duration : 3, ease : 'power2.inOut' });
});

navAb.addEventListener('click', () => {
    let boardUnhide = document.getElementsByClassName('board-unhide');
    if(boardUnhide.length > 0){
        boardUnhide[0].className =  boardUnhide[0].className.replace(" board-unhide", "");
    }
    ab.className += " board-unhide";
    gsap.from(ab, { opacity:0, duration : 3, ease : 'power2.inOut' });
});


$(document).ready(function(){
    $('.confi-content').owlCarousel({
        margin:25,
        responsiveClass:true,
        loop:true,
        autoplay:true,
        dots: true,
        stagePadding:10,
        // slideSpeed: 200,
        autoplayHoverPause:true,
        autoplayTimeout: 2520,
        smartSpeed: 1500,
        responsive:{
            150:{
                items:1,
                nav:true
            },
            300:{
                items:1,
                nav:true,
                margin:15,
            },
            450:{
                items:1,
                nav:true
            },
            650:{
                items:2,
                nav:true
            },
            750:{
                items:2,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});

// confidential code

function removeClasses(cls){
    setTimeout(() => {
        $(document).ready(function(){
            $(`.${cls}`).removeClass('down-content-show')
        });
    },4000)
}

$(document).ready(function(){
    $('.conf-download0').click(function(){
        $('.down-content').addClass('down-content-show')
        removeClasses("down-content");    // for temprorary code
    });
    $('.close').click(function(){
        $('.down-content').removeClass('down-content-show')
    });
});

$(document).ready(function(){
    $('.conf-download1').click(function(){
        $('.down-content1').addClass('down-content-show')
        removeClasses("down-content1");   // for temproray code
    });
    $('.close1').click(function(){
        $('.down-content1').removeClass('down-content-show')
    });
});
$(document).ready(function(){
    $('.conf-download2').click(function(){
        $('.down-content2').addClass('down-content-show')
        removeClasses("down-content2");   // for temprorary code
    });
    $('.close2').click(function(){
        $('.down-content2').removeClass('down-content-show')
    });
});

$(document).ready(function(){
    $('.conf-download3').click(function(){
        $('.down-content3').addClass('down-content-show')
        removeClasses("down-content3");   // for temprorary code
    });
    $('.close3').click(function(){
        $('.down-content3').removeClass('down-content-show')
    });
});

const globe = gsap.timeline({repeat : -1, defaults: {duration : 4 }})
globe
.from('.cName1',{opacity : 0, display : 'block', ease : 'power2.out'})
.from('.cName2',{opacity : 0, display : 'block', ease : 'power2.out'})
.from('.cName3',{opacity : 0, display : 'block', ease : 'power2.out'})
.from('.cName4',{opacity : 0, display : 'block', ease : 'power2.out'})
.from('.cName5',{opacity : 0, display : 'block', ease : 'power2.out'});

// apply card code
$(document).ready(function(){
    $('.box').click(function(){
        alert('Card Will Be Available Soon, contact : info@royal-mac.com');
    });
});

// career code
let career = document.querySelector('.career');
$(document).ready(function(){
    $('#toggleCareer').click(function(){
       $('.career').addClass('career-unhide'); 
    });
});

let jobStatus = document.querySelector('.job-inactive .job-status')
jobStatus ?  jobStatus.innerHTML = "In Active" : ""


// go to top page
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $('.content-info').click(function(){
        window.location.href='mailto:info@royal-mac.com'
    });
});

gsap.from(mybutton, {duration : 2, y : -30, repeat: -1, repeatDelay : 3, ease : "elastic"})

// language coding 

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
  }

  function triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
      element.fireEvent('on' + event.eventType, event);
    }
  }

  const procedureAttr = document.getElementById('railPurchase');
  const goToContactUs = document.getElementById('onClkToContact');
 
document.getElementById('lang').addEventListener('change', function(){
    if(this.value == 'en'){
        procedureAttr.setAttribute('href','procedure.html#googtrans(en|en)');
        goToContactUs.setAttribute('href','procedure.html#googtrans(en|en)');
        
   }           
  if(this.value == 'en' ) {
      procedureAttr.setAttribute('href','procedure.html#googtrans(en|en)');
      goToContactUs.setAttribute('href','procedure.html#googtrans(en|en)');
   }
  if(this.value == 'de' ) {
      procedureAttr.setAttribute('href','procedure.html#googtrans(en|de)');
      goToContactUs.setAttribute('href','procedure.html#googtrans(en|en)');
   }
  if(this.value == 'fr' ) {
      procedureAttr.setAttribute('href','procedure.html#googtrans(en|fr)');
      goToContactUs.setAttribute('href','procedure.html#googtrans(en|en)');
   }
  if(this.value == 'es' ) {
      procedureAttr.setAttribute('href','procedure.html#googtrans(en|es)');
      goToContactUs.setAttribute('href','procedure.html#googtrans(en|en)');
   }
})


$(document).ready(function(){
    var theLang;
    var attr;   
    $("#lang").change(function (e){ 
        e.preventDefault();       
        document.getElementById('remove_op') ? document.getElementById('remove_op').remove() : " "
        
          theLang = $(this).val();
           if(theLang == 'en'){
                attr = "#googtrans(en|en)"
           }           
          if(theLang == 'en' ) {
              attr = "#googtrans(en|en)"
           }
          if(theLang == 'de' ) {
              attr = "#googtrans(en|de)"
           }
          if(theLang == 'fr' ) {
              attr = "#googtrans(en|fr)"
           }
          if(theLang == 'es' ) {
              attr = "#googtrans(en|es)"
           }

	    jQuery('.goog-te-combo').val(theLang);
       
	  window.location = attr;
	  location.reload();
    });
});
