const slider = document.getElementById("slider");
slider.addEventListener("click", () => {
  slider.classList.toggle("active");
  changePrices();
});

const prices = document.querySelectorAll(".card-price");
const pricesMontly = document.querySelectorAll(".card-price--hidden");
const changePrices = () => {
  if (slider.classList.contains("active")) {
    prices.forEach((price) => {
      price.style.display = "none";
    });
    pricesMontly.forEach((priceM) => {
      priceM.style.display = "flex";
    });
  } else {
    prices.forEach((price) => {
      price.style.display = "flex";
    });
    pricesMontly.forEach((priceM) => {
      priceM.style.display = "none";
    });
  }
};
