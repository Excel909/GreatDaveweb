var searchbar = document.getElementById('searcher');
var search_btn = document.getElementById('search-btn');

search_btn.addEventListener('click', inputSearch, false);

searchbar.addEventListener("input", inputSearch, false);

function inputSearch() { 
    let input = document.getElementById('searcher').value;
    input = input.toLowerCase();

    let stoic = document.getElementsByClassName('quote-li');

    for(i = 0; i < stoic.length; i++){
        if(!stoic[i].textContent.toLowerCase().includes(input)){
            stoic[i].style.display = "none";
        } else {
            stoic[i].style.display = "block";
        };
    };
};




