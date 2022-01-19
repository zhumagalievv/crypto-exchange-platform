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

const form = document.getElementById('emailForm');
form.addEventListener('submit', sendMail)

function sendMail(e) {
  e.preventDefault()


  const email = document.getElementById('emailInput').value;

  Email.send({
    SecureToken: "887caab8-cb46-46a7-89c2-00fbfd853034",
    To: 'allaniyazovsultan1@gmail.com',
    From: 'allaniyazovsultan1@gmail.com',
    Subject: "This is the subject",
    Body: email + " - email of the user"
  }).then(
    alert("Message was sent")
  );


}

// ExecuteOrDelayUntilScriptLoaded(getCurrentUser, "sp.js");

// var currentUser;

// function getCurrentUser() {
//   var ctx = new SP.ClientContext.get_current();
//   var web = ctx.get_web();
//   currentUser = web.get_currentUser();
//   ctx.load(currentUser);
//   ctx.executeQueryAsync(onSuccess, onFailure);
// }

// function onSuccess() {
//   alert(currentUser.get_title()); // Domain\Account
//   alert(currentUser.get_email());
// }



// token 27cb8cc8-a57c-46b9-9579-5b53dcd04172
// B0A85E7DA8349539452109A98B98F83C8DFB
// allaniyazovsultan1@gmail.com
// smtp.elasticemail.com


