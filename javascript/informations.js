const name = document.getElementById('name');
const email = document.getElementById('email');
const txtArea = document.getElementById('txtArea');
const eName = document.getElementById('eName');
const eEmail = document.getElementById('eEmail');
const eDes = document.getElementById('eDes');
const form = document.getElementById('form');
eName.textContent = "";
eEmail.textContent = "";
eDes.textContent = "";

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (name.value == "") {
                eName.textContent = " Please enter your name.";
                return
            } else if (email.value == "") {
                eEmail.textContent = " Please enter your email. ";
                return
            } else if (txtArea.value == "") {
                eDes.textContent = " Please enter your massge here.";
                return
            } else {
                // console.log(name.value + " " + email.value + " " + txtArea.value);
                $(document).ready(function () {
                    $("#button").addClass("onclic");
                    validate();
                    function validate() {
                        setTimeout(function () {
                            $("#button").removeClass("onclic");
                            $("#button").addClass("validate");
                            callback();
                        }, 2250);
                    }
                    function callback() {
                        setTimeout(function () {
                            $("#button").removeClass("validate");
                            form.reset()
                        }, 1250);
                    }
                });
            }
        });

        name.addEventListener('blur', function (e) {
            e.preventDefault();
            const nameregex = /^[a-zA-Z\s]+$/;
            if (nameregex.test(name.value) === false) {
                eName.textContent = " Please enter a valid name contain only Alphabet. ";
                this.textContent = "";
                this.focus();
            } else {
                eName.textContent = "";
            }
        });

        email.addEventListener('blur', function (e) {
            e.preventDefault();
            const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (emailregex.test(email.value) === false) {
                eEmail.textContent = "Please enter a valid email address similar to ([a-zA-Z][1-9]@gmail.com)";
                email.textContent = "";
                email.focus();
            } else {
                eEmail.textContent = "";
            }
        });

//-----------------------------------------------go to top coding------------------------------------------------------//

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
//-------------------------------------------------------language coding-------------------------------------------------------//

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en',includedLanguages: 'en,es,de,fr', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
  }

//---------------------------------------------animation on scroll-----------------------------------------------------------//

    window.addEventListener('load', () => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
          mirror: true,
        })
});