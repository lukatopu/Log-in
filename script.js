const emailInput = document.querySelector("#email");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const button = document.querySelector("#button");

const specialSymbols = ['@', '#', '!', '$', '%'];


button.addEventListener('click' , (e) => {
    let validEmail = emailInput.value.includes("@");
    let validUserName = /\d/.test(userName.value)
    let passwordContainsUppercase = /[A-Z]/.test(password.value);
    let passwordContainsSpecialSymbol = specialSymbols.some(i => password.value.includes(i));
    let validPasswordConfirmation = password.value === confirmPassword.value

    if (validEmail && validUserName && passwordContainsUppercase && passwordContainsSpecialSymbol && validPasswordConfirmation) {
        alert('Successful registration')
    } else {
        if(!validEmail) {
            alert('Enter valid email')
            emailInput.style.borderColor = 'red'
        } else {
            emailInput.style.borderColor = 'black'
        }

        if(!validUserName) {
            alert("Username should contain number") 
            userName.style.borderColor = 'red'
        } else {
            userName.style.borderColor = 'black'
        }


        if(!passwordContainsUppercase) {
            alert("Password doesnt contains uppercase letter")
            password.style.borderColor = 'red'

        } else {
            password.style.borderColor = 'black'
        }

        if(!passwordContainsSpecialSymbol) {
            alert("Password doesnt contains special symbol: @, #, !, $, % ")
            password.style.borderColor = 'red'

        } else {
            password.style.borderColor = 'black'
        }

        if(!validPasswordConfirmation) {
            alert('Passwords do not match')
            confirmPassword.style.borderColor = 'red'
        } else {
            confirmPassword.style.borderColor = 'black'
        }
    }
})