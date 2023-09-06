const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let fName = firstName.value.trim()
    let lName = lastName.value.trim()
    let emailV = email.value.trim()
    let passwordV = password.value.trim()
   

    if(fName === ''){
        errorFunc(firstName, 'First name cannot be empty')
    }
    else{
        successFunc(firstName)
    }

    if(lName === ''){
        errorFunc(lastName, 'Last name cannot be empty')
    }
    else{
        successFunc(lastName)
    }

    if(emailV === ''){
        errorFunc(email, 'Looks like this is not anemail')
    }else if(!isEmail(emailV)){
        errorFunc(email, 'Looks like this is not anemail')
    }
    else{
        successFunc(email)
    }

    if(passwordV === ''){
        errorFunc(password, 'Password cannot be empty')
    }
    else{
        successFunc(password)
    }
})


function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message
    req.className += 'error '
    span.className += 'error-text '
    if(req !== email){
        req.value = ''
    }
    else{
        req.style.color = 'hsl(0,100%,74%)'
    }
}

function successFunc(req) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    req.className +='success '
    req.classList.remove('error');
    span.classList.remove('error-text')
    span.innerText = ''
}

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}
