const button = document.getElementById('button')
const share = document.querySelector('.share')
const buttonClose = document.getElementById('button-close')
const buttonCloseOne = document.getElementById('button-close-one')

button.addEventListener('click', function(){

    share.style.display = 'flex'

    buttonClose.style.display = 'inline-block'

    button.style.display = 'none'
})

buttonClose.addEventListener('click', close)
buttonCloseOne.addEventListener('click', close)


function close(){
    share.style.display = 'none'
    button.style.display = 'inline-block'
    buttonClose.style.display = 'none'
}