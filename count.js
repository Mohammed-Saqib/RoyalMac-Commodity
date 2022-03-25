// $(document).ready(function(){
//     $('.counter').counterUp({
//         delay : 10,
//         time: 1000
//     })
// });

$(document).ready(function(){
    function counterUp(element, startAtPercentage) {
        if (startAtPercentage == null) {
            startAtPercentage = 20;
        }
    
        var numericValue = getNumericValue(element);
    
        jQuery(element).counterUp({
            beginAt: (numericValue > 0)
                ? (numericValue * startAtPercentage / 100)
                : undefined,
        });
    }
    
    function getNumericValue(element) {
        try {
            return Number(element.innerText
                // Remove decimal points
                .replace(/.\D+/g, '')
                // Remove thousands separator and other symbols
                .replace(/\D/g, ''));
        } catch (error) {
            return 0;
        }
    }
    
    // ... or with jQuery
    jQuery('.counter').each(function (index, element) {
        counterUp(element, 20);
    });
});


// window.addEventListener('scroll', reveal);
// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');
//   for(var i = 0; i < reveals.length; i++){
//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;
//     if(revealtop < windowheight - revealpoint){
//         const counter = document.querySelectorAll('.counter');
//         counter.forEach((counter)=>{
//         counter.innerHTML=0; 
//         const updateCounter = () =>{
//         const targetCount = +counter.getAttribute('data-target');
//       const startingCount = Number(counter.innerHTML);  
//       const incr = targetCount / 100;
        
//       if(startingCount < targetCount){
//           counter.innerHTML=`${Math.round(startingCount + incr)}`;
//           setTimeout(updateCounter , 10)
//       }else{
//           counter.innerHTML=targetCount;
//       }
//     }      
//       updateCounter();
//     })
//     }
//     else{
//         // activeFun("notactive")
//     }
//   }
// }
