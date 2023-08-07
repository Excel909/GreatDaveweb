// code for the showing and hiding of rowe id
$(document).ready(function(){
    $('#div-bar').click(function () {
       if ($('#rowe').is(':hidden')) {
           $('#rowe').show();
       } else {
           $('#rowe').hide();
       }
     }); 
   });

//Code for the enlargement of videos when clicked on
var putter = document.getElementById("vid-watch");

function getTarget(e){
    if(!e){
        e = window.e;
    } return e.target || e.srcElement;
}

if(putter.addEventListener){
    putter.addEventListener("click", addVideo, false);
} else{
    putter.attachEvent("onclick", addVideo, false);
};

function addVideo(e){
    var click = getTarget(e);
    var btn_li = click.parentNode;
    var btn_ul = btn_li.parentNode;
    var lister = btn_ul.parentNode;
    var lister_parent = lister.parentNode;
    var div_two = lister_parent.parentNode;
    var movie_card = div_two.parentNode;
    var m_row = movie_card.parentNode;
    var movie_holder = m_row.parentNode;

    

    var card_contain = document.getElementById("card-container");
    card_contain.style.display = "block";

    card_contain.appendChild(movie_card);
}


   
   