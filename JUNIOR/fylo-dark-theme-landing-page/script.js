const input = document.getElementById("input");
const errorMessage = document.getElementById("error-message");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");

const validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validEmail.test(input.value)) {
    console.log("es correcto");
    errorMessage.classList.remove("active");
  } else {
    console.log("no es correcto");
    errorMessage.classList.add("active");
  }
});
