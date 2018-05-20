

function verifyEmail() {

    var api = "http://apilayer.net/api/check";
    var accessKey = "19d25c3d7087ab546c22699e1a0e5ec2";
    var inputEmail = $('#inputEmail').val();

    $('#emailVerificationMsg').html('Verifying your email ...');
    $.get(api + '?access_Key=' + accessKey + '&email=' + inputEmail, function (data) {
        console.log(data);
        // check the email format
        if (!data['format_valid']) { $('#emailVerificationMsg').html('Email should have a valid format '); return; }
        // check the disposable emails
        if (data['disposable']) { $('#emailVerificationMsg').html('Diposable (temporary email addresses) emails are not accepted '); return; }
        // check the validity
        if (!data['smtp_check'] || !data['mx_found']) { $('#emailVerificationMsg').html('Email is invalid'); return; }

        // else email is valid , perform the download
        $('#emailVerificationMsg').html('Download will begin shortly ...');
    });
}