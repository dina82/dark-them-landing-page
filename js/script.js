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
for (let i = 0; i < [1, 3, 5, 7].length; i++) {

    console.log(i);
    if (i == 3) {
        // return 4
    }
}
[1, 3, 5, 7].forEach(i => {
    if (i == 3) {
        return
    }
    console.log(i);

});