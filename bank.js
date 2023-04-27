document.getElementById('login-btn').addEventListener('click', function () {
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   const passField = document.getElementById('user-pass');
   const userPass = passField.value;
   if (userEmail == 'sabrina@gmail.com' && userPass == 'secret') {
      window.location.href = 'banking.html'
   }
});

