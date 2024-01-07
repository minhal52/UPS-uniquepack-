// whatsapp message script
function sendWhatsAppMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // Check if all fields are filled
    if (name && email && message) {
        var whatsappMessage = "Name: " + encodeURIComponent(name) +
            "%0AEmail: " + encodeURIComponent(email) +
            "%0AMessage: " + encodeURIComponent(message);

        var whatsappLink = "https://wa.me/9945883157?text=" + whatsappMessage;

        window.location.href = whatsappLink;
    } else {
        alert("Please fill in all fields before sending the message!");
    }
}
