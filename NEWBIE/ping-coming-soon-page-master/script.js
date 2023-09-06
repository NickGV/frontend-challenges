const email = document.getElementById('email');
const textError = document.querySelector(".text-error")
const form = document.getElementById('form');
const button = document.getElementById('button');

form.addEventListener('submit',validate);
button.addEventListener('click',validate);

function validate(e){
    e.preventDefault();
    let emailValue = email.value.trim();
        if(!isEmail(emailValue)){
            textError.style.display = 'block';
            textError.innerHTML = 'Please provide a valid email address';
            email.classList.add('error');
        }
        else{
            textError.style.display = 'none';
            email.classList.remove('error');
            console.log('email validation')
        }
}

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

