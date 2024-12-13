$(document).ready(function() {
    // Simple Form Validation
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();

        if (name && email && subject && message) {
            $('#form-feedback').text('Thank you for your message!').css('color', 'green');
            $('#contactForm')[0].reset();
        } else {
            $('#form-feedback').text('Please fill out all fields.').css('color', 'red');
        }
    });
});