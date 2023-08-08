

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
    var card_show = document.getElementById("card-show");

    $('#card-container').show();
    $('#rowe').hide();
    $('.div-2').hide();

    var div_one = document.getElementById('div-1');
    div_one.style.height = "100%";
    var back_btn = document.getElementById("video-back");

    movie_card.setAttribute("id", "card-show-mcard");

    card_show.appendChild(movie_card);
    card_show.appendChild(back_btn);

    $('#video-back').show();
}

//Code to remove video from card-show and return back to mrow
$('#video-back').click(function(){
    location.reload();
});

$('#video-back').hide();

//card container
$('#card-container').hide();