//to handle form submission

var form_holder = document.getElementById('contact-form');

form_holder.addEventListener('submit', function(event){
    event.preventDefault();

    var form = event.target;
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var tel = form.elements.tel.value;
    var message = form.elements.message.value;

    //to construct the email message

    var subject = "Message from your website (Greatdaveblog)";
    var body = "Name: " + name + "\nEmail: " + email + "\nPhone Number: " + tel + "\nMessage: " + message;

    var mailtoLink = "mailto:excellentadejorin@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;

    //after submission

    alert("Thanks for Reaching out to us we'll get back to you shortly");

    location.reload();
});