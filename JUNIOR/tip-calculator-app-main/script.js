const billInput = document.getElementById("bill__input");
const nPeople = document.getElementById("people__input");
const tipCustom = document.getElementById("tip__custom-input");

const tipBtns = document.querySelectorAll("#tip__btn");

const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

const resetBtn = document.getElementById("reset-btn");
const textError = document.getElementById("text-error");

function calculateTip() {
  const selectTipBtn = document.querySelector(".tip__button.active");
  let percentage;

  if (selectTipBtn) {
    percentage = parseFloat(selectTipBtn.dataset.percentage);
  } else {
    percentage = parseFloat(tipCustom.value) / 100;
  }

  const numPeople = getNumPeople();
  const billAmount = parseFloat(billInput.value);

  if (!billAmount || !percentage || !numPeople) {
    return;
  }

  const tip = (billAmount * percentage) / numPeople;
  tipAmount.textContent = `$${tip.toFixed(2)}`;
  totalAmount.textContent = `$${(billAmount / numPeople + tip).toFixed(2)}`;
}

tipBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    calculateTip();
  });
});

tipCustom.addEventListener("change", (e) => {
  let percentage = tipCustom.value / 100;

  const numPeople = getNumPeople();
  const billAmount = parseFloat(billInput.value);

  if (!billAmount || !percentage || !numPeople) {
    return;
  }

  const tip = (billAmount * percentage) / numPeople;
  tipAmount.textContent = `$${tip.toFixed(2)}`;
  totalAmount.textContent = `$${(billAmount / numPeople + tip).toFixed(2)}`;
});

nPeople.addEventListener("input", () => {
  calculateTip();
});

function getNumPeople() {
  const numPeopleValue = parseInt(nPeople.value);
  if (isNaN(numPeopleValue) || numPeopleValue <= 0) {
    textError.classList.add("active");
    return 1; // Default to 1 person if input is invalid
  }
  textError.classList.remove("active");
  return numPeopleValue;
}

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  nPeople.value = "";
  tipCustom.value = "Custom";

  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
