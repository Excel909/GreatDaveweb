var searchbox = document.getElementById("searchbar");

searchbox.addEventListener("input", search_quotes, false);


function search_quotes() { 
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('stoic'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 


// function searchQuote(){
//     let input = document.getElementById("searchbar").value;
//     input = input.toLowerCase();
//     let quotes_li = document.getElementsByClassName("stoic");

//     for( var i = 0; i < quotes_li ; i++){
//         if(!quotes_li.innerHTML.toLowerCase().includes(input)){
//             quotes_li[i].style.display = "none";
//         } else {
//             quotes_li[i].style.display = "list-item";
//         }
//     }

// }