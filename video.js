
$('#video-back').click(function(){
    location.reload();
});

$('#video-back').hide();

//card container
$('#card-container').hide();



$('.vid-watch').each(function(){
    $(this).click(addVideo);
});

function getTarget(e){
    if(!e){
        e = window.e;
    } return e.target || e.srcElement;
}


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
    $(lister).hide();
    $('.div-2').hide();

    var div_one = document.getElementById('div-1');
    div_one.style.height = "100%";
    var back_btn = document.getElementById("video-back");

    movie_card.setAttribute("id", "card-show-mcard");

    card_show.appendChild(movie_card);
    card_show.appendChild(back_btn);

    $('#video-back').show();
}


// for video search bar

var searchbox = document.getElementById("searcher");
var search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", search_quotes, false);

function search_quotes() { 
    let input = document.getElementById('searcher').value;
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('movie-card'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 