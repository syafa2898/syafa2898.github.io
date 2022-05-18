// OTP

document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function(event) {
                if (event.key === "Backspace") {
                    inputs[i].value = '';
                    if (i !== 0) inputs[i - 1].focus();
                } else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') {
                        return true;
                    } else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key;
                        if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    }
                }
            });
        }
    }
    OTPInput();
});


// dashboard
// increment button
function incrementValue() {
    var value = parseInt(document.getElementById('pages').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('pages').value = value;
}

// Decrement button
function decrementValue() {
    var value = parseInt(document.getElementById('pages').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('pages').value = value;
}

// login
// Show password

function showPassword() {
    const password = document.getElementById("floatingPassword");
    if (password.type == "password") {
        password.type = "text";
        document.getElementById("eye").style.color = "#999"
    } else {
        password.type = "password";
        document.getElementById("eye").style.color = "#111"
    }
}

function showPassword2() {
    const password = document.getElementById("password");
    if (password.type == "password") {
        password.type = "text";
        document.getElementById("eye").style.color = "#999"
    } else {
        password.type = "password";
        document.getElementById("eye").style.color = "#111"
    }
}

function showConfirmPassword() {
    const password = document.getElementById("confirm-password");
    if (password.type == "password") {
        password.type = "text";
        document.getElementById("eye-confirm").style.color = "#999"
    } else {
        password.type = "password";
        document.getElementById("eye-confirm").style.color = "#111"
    }
}