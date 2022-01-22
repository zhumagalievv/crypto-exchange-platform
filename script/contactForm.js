const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', sendContactForm)


const openModalButton = document.querySelector('#getStarted')
const modal = document.querySelector('#modal')
const overlay = document.getElementById('overlay')

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    openModal(modal)
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modals.active')
    closeModal(modal)
    clearContactForm()
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function sendContactForm(e) {
    e.preventDefault()

    const element = document.getElementById('pNumber')

    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const pNumber = element.value;
    const comment = document.getElementById('comment').value;


    const dual_code = element.closest('.iti').firstChild.firstChild.getAttribute('title')

    Email.send({
        SecureToken: "887caab8-cb46-46a7-89c2-00fbfd853034",
        To: 'allaniyazovsultan1@gmail.com',
        From: 'allaniyazovsultan1@gmail.com',
        Subject: "SnowLeopard Feedback",
        Body: `Fullname:     "${fullName}".<br>
               Email:        "${email}".<br>
               ${dual_code}${pNumber}.<br>
               Feedbackk:    "${comment}".`
    }).then(showAlert('The message has been sent'));

    const modal = e.target.closest('.modals.active')
    closeModal(modal);
    clearContactForm()
}

function showAlert(message) {
    const div = document.createElement('div')
    div.className = 'alert alert-success alert-message';
    div.appendChild(document.createTextNode(message));

    document.querySelector('.wrapper main').appendChild(div);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

function clearContactForm() {
    document.querySelector('#fullname').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#pNumber').value = '';
    document.querySelector('#comment').value = '';
}


// Masking input for phone numbers
var input = document.querySelector("#pNumber");

window.intlTelInput(input, {
    initialCountry: "kz",
    separateDialCode: true,
    preferredCountries: ["us", "ru", "gb", "kz", "cn"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});


$('#pNumber').on("countrychange", function () {
    $('#pNumber').val("");
});