window.addEventListener('load', function () {
    document.body.classList.add('hide')
})



const allLink = document.querySelectorAll('a')

allLink.forEach(item=> {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        document.body.classList.remove('hide')
        setTimeout(()=> {
            window.location.href = this.href
        }, 500)
    })
})
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your user ID
    emailjs.init("TDN99diaVDkhvpKbt");

    // Submit form
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data using EmailJS
        emailjs.sendForm('service_oswl3a9', 'template_2fwc9me', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('contact-form').reset();
                window.location.href = 'CheckInbox.html'; // Redirect to CheckInbox.html
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
    });
});