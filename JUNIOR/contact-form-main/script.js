const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const inputs = document.querySelectorAll(
    "input[type=text], input[type=email], textarea"
  );
  let isValid = true;

  inputs.forEach((input) => {
    console.log(input.value);
    if (input.value === "") {
      isValid = false;
      input.classList.add("error");
      const errorMessage = input.nextElementSibling;
      if (errorMessage) {
        errorMessage.style.display = "block";
      }
    } else {
      input.classList.remove("error");
      const errorMessage = input.nextElementSibling;
      if (errorMessage) {
        errorMessage.style.display = "none";
      }
    }
  });

  const formOptions = form.querySelectorAll(".form-options");
  const radioInputs = form.querySelectorAll('input[name="query-entry"]');
  const radioError = document.querySelector(".error-message-radio");

  console.log(radioError);
  if (![...radioInputs].some((radio) => radio.checked)) {
    isValid = false;
    if (radioError) {
      radioError.style.display = "block";
    }
  } else {
    if (radioError) {
      radioError.style.display = "none";
    }
  }

  const consentInput = form.querySelector('input[name="consent"]');
  const consentError = document.querySelector(".error-message-consent");

  if (!consentInput.checked) {
    isValid = false;
    if (consentError) {
      consentError.style.display = "block";
    }
  } else {
    if (consentError) {
      consentError.style.display = "none";
    }
  }

  if (isValid) {
    const successMessage = document.querySelector(".success-message");
    successMessage.style.display = "block";
  }
});
