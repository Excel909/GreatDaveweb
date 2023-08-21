// cinema button programming

var cinema_btn = document.getElementsByClassName('bb-btn')[2];
$('#vid-display').hide();

//get the video
var taken_vid = document.getElementsByClassName('bb-vid')[0];

// get where the video would be placed
var vid_holder = document.getElementById('vid-holder');

cinema_btn.addEventListener('click', function(){
    //put the video in where it should be placed
    vid_holder.appendChild(taken_vid);

    // also make the entire holder visible
    $('#vid-display').show();
}, false);


//exit button

var exit_btn = document.getElementById('exiter');

exit_btn.addEventListener('click', function(){
    // make the entire holder dissapear
    $('#vid-display').hide();

    //return video to original place
    // get the video's original position

    var bvid = document.getElementsByClassName('bvid')[0];

    bvid.appendChild(taken_vid);
}, false);



