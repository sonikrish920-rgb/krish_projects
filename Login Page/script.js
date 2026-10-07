const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formStatus = document.getElementById('form-status');

document.querySelectorAll('[data-show]').forEach(button => {
    button.addEventListener('click', () => {
        const showSignup = button.dataset.show === 'signup-form';
        loginForm.hidden = showSignup;
        signupForm.hidden = !showSignup;
        formStatus.textContent = '';
        (showSignup ? document.getElementById('signup-name') : document.getElementById('login-identity')).focus();
    });
});

document.getElementById('login').addEventListener('submit', event => {
    event.preventDefault();
    formStatus.textContent = 'This demo has no authentication service, so no login was attempted.';
});

document.getElementById('signup').addEventListener('submit', event => {
    event.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirmation = document.getElementById('confirm-password').value;
    if (password !== confirmation) {
        formStatus.textContent = 'The passwords do not match.';
        document.getElementById('confirm-password').focus();
        return;
    }
    formStatus.textContent = 'This demo has no account service, so no account was created.';
});
