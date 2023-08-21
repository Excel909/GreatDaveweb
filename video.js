// programming the following button
//cinema button

$('#display').hide();
var cinema_btn = document.getElementsByClassName('vb-2')[0];

cinema_btn.addEventListener('click', function(){
    $('#display').show();

    var holder = document.getElementById('vid-holder');
    var video = document.getElementsByClassName('yvv')[0];

    video.classList.add('cinema-mode');
    holder.appendChild(video);

}, false);


var exiter = document.getElementById('exiter');
exiter.addEventListener('click', function(){
    var vid_new_holder = document.getElementsByClassName('yi-vid')[0];
    var returned_video = document.getElementsByClassName('yvv')[0];

    returned_video.classList.remove('cinema-mode');
    vid_new_holder.appendChild(returned_video);

    $('#display').hide();
},false);