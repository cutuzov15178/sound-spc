const signupButton = document.getElementById('signup-button');

signupButton.addEventListener('click', () => {
    window.location.href = '../SignUp/signup.html';
});

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password); // tìm xem có email và password đấy không
    if (user) {
        alert('Login successful');
        window.location.href = '../';
    } else {
        alert('Invalid email or password');
    }
});