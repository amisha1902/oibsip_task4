document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
  
    // Mock user database
    const users = [];
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const regUsername = document.getElementById('regUsername').value;
      const regPassword = document.getElementById('regPassword').value;
  
      users.push({ username: regUsername, password: regPassword });
      messageDiv.innerText = 'Registration successful. You can now log in.';
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const loginUsername = document.getElementById('loginUsername').value;
      const loginPassword = document.getElementById('loginPassword').value;
  
      const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
  
      if (user) {
        messageDiv.innerText = 'Login successful. Redirecting to secured page...';
        setTimeout(() => {
          window.location.href = 'secured-page.html';
        }, 2000);
      } else {
        messageDiv.innerText = 'Invalid username or password.';
      }
    });
  });
  