let userEmail = document.querySelector('form');
userEmail.addEventListener('submit', validateEmail)

function validateEmail(e) {
    e.preventDefault()
    let y = /^[a-z]*\@(gmail|yahoo|outlook)\.com$/i;
    document.querySelector('#errorMsg').style.display = "block"
    if (y.test(userEmail.userEmail.value)) {
        document.querySelector('#errorMsg').style.display = "none"

    }

}