const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', sendMail);

function sendMail(e) {
  e.preventDefault()

  const email = document.getElementById('emailInput').value;

  Email.send({
    SecureToken: "c5079c95-2102-47db-baf3-b75fb63656bc",
    To: 'daulet.sergaziyev@snowleopard.co.com',
    From: 'allaniyazovsultan1@gmail.com',
    Subject: "SnowLeopard Feedback email",
    Body: email + " - email of the user"
  }).then(showAlert('The message has been sent!'));


  // allaniyazovsultan1@gmail.com
  // password 9AA8E4E892B6DC2986A0D397E059568B6744
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







