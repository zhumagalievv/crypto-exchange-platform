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
        SecureToken: "c5079c95-2102-47db-baf3-b75fb63656bc",
        To:   'daulet.sergaziyev@snowleopard.co.com',
        From: 'allaniyazovsultan1@gmail.com',
        Subject: "SnowLeopard Feedback contacts",
        Body: `Fullname:     ${fullName}.<br>
               Email:        ${email}.<br>
               ${dual_code} ${pNumber}.<br>
               Feedback:    "${comment}".`
    }).then(showAlert('The message has been sent!'));
    // allaniyazovsultan1@gmail.com
    // password 9AA8E4E892B6DC2986A0D397E059568B6744

    // abcdDCBA1234#

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
    initialCountry: "auto",
    separateDialCode: true,
    preferredCountries: ["us", "ru", "kz", "cn", "de", "jp"],
    geoIpLookup: getIp,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // just for formatting/placeholders etc
});

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=578d1bc7393832', { headers: { 'Accept': 'application/json' } })
        .then((resp) => resp.json())
        .catch(() => {
            return {
                country: 'us',
            };
        })
        .then((resp) => callback(resp.country));
}

$('#pNumber').on("countrychange", function () {
    $('#pNumber').val("");
});