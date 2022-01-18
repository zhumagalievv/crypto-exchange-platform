// function sendMail() {
//   const email = document.getElementById('email').value
//   console.log("dasd"+email)

//     var tempParams = {
//       from_name: "Sultanbek",
//     to_name: "Sultanbek",
//     message:email
//   }
//   console.log("dasd"+tempParams.message)

//   emailjs.send('gmail', 'template_lwpdi0k', tempParams).then(res => console.log("success", res))
// }

function sendMail(e) {
  e.preventDefault()
  const email = document.getElementById('email').value;

  Email.send({
    SecureToken: "ebd4dcc6-3f76-49fe-b62e-ff619651c737",
    To: 'allaniyazovsultan1@gmail.com',
    From: 'allaniyazovsultan1@gmail.com',
    Subject: "This is the subject",
    Body: email
  }).then(
    message => alert(message)
  );

}

const form = document.getElementById('formEmail');
form.addEventListener('submit',sendMail)
