// Get DOM elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Toggle between login and signup forms
loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    setTimeout(() => {
        loginForm.classList.add('fade-in');
        signupForm.classList.remove('fade-in');
    }, 10);
});

signupBtn.addEventListener('click', () => {
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    setTimeout(() => {
        signupForm.classList.add('fade-in');
        loginForm.classList.remove('fade-in');
    }, 10);
});

// Form submission handlers
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Add your login logic here
    console.log('Login attempt:', { email, password });

    // Redirect on successful login
    if (email && password) {
        window.location.href = "main.html";
    } else {
        alert("Please enter valid credentials.");
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;
    // Add your signup logic here
    console.log('Signup attempt:', { name, email, password, userType });
});
