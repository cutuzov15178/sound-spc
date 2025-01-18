const backToLogin = document.getElementById('back-to-login');

backToLogin.addEventListener('click', () => {
    window.location.href = '../Login/login.html';
});

const finishRegistration = document.getElementById('finish-registration');

finishRegistration.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('full-name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsAndConditions = document.getElementById('terms-and-conditions').checked;
    if (confirmPassword != password) {
        alert('password va confirm password phai giong nhau');
        return;
    }
    if (email && fullName && password && confirmPassword && termsAndConditions) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ id: users.length + 1, email, fullName, password, confirmPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful');
        window.location.href = '../Login/login.html';
    } else {
        alert('Please fill in all fields');
    }
});