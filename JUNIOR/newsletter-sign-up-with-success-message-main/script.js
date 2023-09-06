const email = document.getElementById('email');

const textError = document.getElementById("error-message");
const emailAddress = document.getElementById("email-address");

const form = document.getElementById('form');
const submit = document.getElementById('submit-button');

const main = document.querySelector('main');
const success = document.querySelector('.success-section');

form.addEventListener('submit',validate);
submit.addEventListener('click',validate);

function validate(e){
    e.preventDefault();
    let emailValue = email.value.trim();
        if(!isEmail(emailValue)){
            textError.style.display = 'block';
            textError.innerHTML = 'Valid email required';
            email.classList.add('error');
        }
        else{
            textError.style.display = 'none';
            emailAddress.innerText = emailValue
            email.classList.remove('error');
            console.log('email validation')
            main.style.display = 'none';
            success.style.display = 'flex'
        }
}



function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

