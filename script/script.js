$(document).ready(function() {

    $('#button').click(function(e) {
        e.preventDefault();

        $('#name_error').html('');
        $('#email_error').html('');
        $('#phone_error').html('');
        $('#name').removeClass('input_empty');
        $('#email').removeClass('input_empty');
        $('#phone').removeClass('input_empty');


        let name = $.trim($('#name').val());
        let email = $.trim($('#email').val());
        let phone = $.trim($('#phone').val());
        let message = $.trim($('#message').val());

        if (name === '') {
            $('#name_error').html('Campo não pode estar vazio.');
            $('#name').addClass('input_empty');
        }

        if (email === '') {
            $('#email_error').html('Campo não pode estar vazio.');
            $('#email').addClass('input_empty');
        }

        if (phone === '') {
            $('#phone_error').html('Campo não pode estar vazio.');
            $('#phone').addClass('input_empty');
        }
    });
});

// $(document).ready(function() {
//     $('#card_form').on('submit', function() {
//         console.log('oi');

//         $('#name_error').html('');
//         $('#email_error').html('');
//         $('#phone_error').html('');
//         $('#name').removeClass('input_empty');
//         $('#email').removeClass('input_empty');
//         $('#phone').removeClass('input_empty');


//         let name = $.trim($('#name').val());
//         let email = $.trim($('#email').val());
//         let phone = $.trim($('#phone').val());
//         let message = $.trim($('#message').val());

//         if (name === '') {
//             $('#name_error').html('Campo não pode estar vazio.');
//             $('#name').addClass('input_empty');
//         }

//         if (email === '') {
//             $('#email_error').html('Campo não pode estar vazio.');
//             $('#email').addClass('input_empty');
//         }

//         if (phone === '') {
//             $('#phone_error').html('Campo não pode estar vazio.');
//             $('#phone').addClass('input_empty');
//         }
//     });

// });