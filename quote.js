var searchbar = document.getElementById('searcher');

searchbar.addEventListener("input", function(){
    let input = this.value;
    input = input.toLowerCase();

    let stoic = document.getElementsByClassName('quote-li');

    for(i = 0; i < stoic.length; i++){
        if(!stoic[i].textContent.toLowerCase().includes(input)){
            stoic[i].style.display = "none";
        } else {
            stoic[i].style.display = "block";
        };
    };

}, false);

