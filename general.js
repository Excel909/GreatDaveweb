// code for contact/about tabs
var about_click = document.getElementById("about-click");
var contact_click = document.getElementById("contact-click");
var about_box = document.getElementById("ab");
var contact_box = document.getElementById("cb");

$('#cb').hide();

contact_click.addEventListener("click", function(){
    $('#cb').show();
    $('#ab').hide();
}, false);

about_click.addEventListener("click", function(){
    $('#ab').show();
    $('#cb').hide();
}, false);



// programming the fade in effect for the whole page

window.addEventListener("load", function(){
    var contain = document.getElementById("container");

    contain.style.animation = "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
}, false);


// Javascript media queries
//slides >>
var intro = document.getElementsByClassName('intro')[0];
var footer = document.getElementsByClassName('foot-main')[0];
var foot_social = document.getElementsByClassName('foot-social')[0];

if(window.innerHeight < 360){
    intro.style.height = "110vh";
    footer.style.height = "100vh";
    foot_social.style.height = "20vh";
};





