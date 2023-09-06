const email = document.getElementById('email');
const error = document.querySelector(".icon-error")
const textError = document.querySelector(".text-error")
const form = document.getElementById('form');
const submit = document.getElementById('submit');

form.addEventListener('submit',validate);
submit.addEventListener('click',validate);

function validate(e){
    e.preventDefault();
    let emailValue = email.value.trim();
        if(!isEmail(emailValue)){
            error.style.display = 'block';
            textError.style.display = 'block';
            textError.innerHTML = 'Please provide a valid Email';
            email.classList.add('error');
        }
        else{
            error.style.display = 'none';
            textError.style.display = 'none';
            email.classList.remove('error');
            console.log('email validation')
            textError.style.display = 'block';
            textError.innerHTML = 'Your email address is valid';
        }
}

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

