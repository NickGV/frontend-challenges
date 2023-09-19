const view = document.getElementById("pageviews");
const price = document.getElementById("price");
const priceSpan = document.getElementById("price__span");
const priceSm = document.getElementById("price--sm");
const priceSpanSm = document.getElementById("price__span--sm");
const slider = document.getElementById("slider-price");
const togle = document.getElementById("switch");

const pageviews = ["10K", "50K", "100K", "500K", "1M"];
const perMonth = ["8", "12", "16", "24", "36"];

let isYearly = false;

slider.addEventListener("input", (e) => {
  updateValue();
  view.innerText = pageviews[slider.value] + " PAGEVIEWS";

  let value = slider.value * 25;

  slider.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

togle.addEventListener("change", () => {
  if (isYearly == false) {
    isYearly = true;
    priceSpan.innerText = "/ year";
    priceSpanSm.innerText = "/ year";
  } else {
    isYearly = false;
    priceSpan.innerText = "/ month";
    priceSpanSm.innerText = "/ month";
  }

  updateValue();
});

function updateValue() {
  if (isYearly) {
    price.innerText = "$" + perMonth[slider.value] * 12 * 0.75 + ".00";
    priceSm.innerText = "$" + perMonth[slider.value] * 12 * 0.75 + ".00";
  } else {
    price.innerText = "$" + perMonth[slider.value] + ".00";
    priceSm.innerText = "$" + perMonth[slider.value] + ".00";
  }
}
