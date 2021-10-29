$(document).ready(function() {
    $('#button').click(function(e) {

        let name = $.trim($('#name').val());
        let email = $.trim($('#email').val());
        let phone = $.trim($('#phone').val());
        let message = $.trim($('#message').val());

        if (name === '') {
            $('#name_error').html('<p> Campo Nome não pode estar vázio. </p>');
            $('#name_error').slideDown(800);
        }

        if (email === '') {
            $('#message_input_empty').html('<p> Campo Email não pode estar vázio. </p>');
            $('#message_input_empty').fadeIn(1000).fadeOut(2500);
        }



        // if (phone === '') {
        //     $('#message_input_empty').html('<p> Campo Telefone não pode estar vázio. </p>');
        //     $('#message_input_empty').fadeIn(2000).fadeOut(5000);
        // }

    });
});