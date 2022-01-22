const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', sendMail);

function sendMail(e) {
  e.preventDefault()

  const email = document.getElementById('emailInput').value;

  Email.send({
    SecureToken: "887caab8-cb46-46a7-89c2-00fbfd853034",
    To: 'allaniyazovsultan1@gmail.com',
    From: 'allaniyazovsultan1@gmail.com',
    Subject: "This is the subject",
    Body: email + " - email of the user"
  }).then(showAlert('The message has been sent!'));
  clearEmail()
}

function showAlert(message) {
  const div = document.createElement('div')
  div.className = 'alert alert-success alert-message';
  div.appendChild(document.createTextNode(message));

  document.querySelector('.wrapper main').appendChild(div);

  // Vanish in 3 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

function clearEmail() {
  document.querySelector('#emailInput').value = '';
}







