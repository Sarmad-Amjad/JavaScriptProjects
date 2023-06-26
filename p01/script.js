const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All Functions
//Funstion to show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Funstion to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Funstion to check if email is valid
function isValidEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

//This is an event listener for the form submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'email is required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid')
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'password is required')
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Confirm password is required')
    } else {
        showSuccess(password2);
    }
})