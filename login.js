document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Placeholder validation
    if (email === 'user@example.com' && password === 'password123') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid email or password.';
    }
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Redirecting to password recovery page...');
    // Placeholder for redirection logic
});

document.getElementById('signUp').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
});

document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.signup-container').style.display = 'none';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var message = document.getElementById('signupMessage');

    // Placeholder validation
    if (email !== '' && password !== '') {
        message.style.color = 'green';
        message.textContent = 'Sign Up successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields.';
    }
});

document.getElementById('googleSignup').addEventListener('click', function() {
    alert('Redirecting to Google sign-up page...');
    // Placeholder for redirection logic
});

document.getElementById('facebookSignup').addEventListener('click', function() {
    alert('Redirecting to Facebook sign-up page...');
    // Placeholder for redirection logic
});
