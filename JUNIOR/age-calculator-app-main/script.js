const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");

const form = document.querySelector("form");

const submitBtn = document.getElementById("submit-btn");
const rYears = document.getElementById("r-years");
const rMonths = document.getElementById("r-months");
const rDays = document.getElementById("r-days");

form.addEventListener("submit", handleSubmit);
const date = new Date();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (inputDay.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (inputMonth.value > month) {
            month = month + 12;
            year = year - 1;
        }
        animateText("r-days", 0, day - inputDay.value);
        animateText("r-months", 0, month - inputMonth.value);
        animateText("r-years", 0, year - inputYear.value);
        // rDays.innerText = day - inputDay.value;
        // rMonths.innerText = month - inputMonth.value;
        // rYears.innerText = year - inputYear.value;
    }
}

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (i.value == "") {
            i.classList.add("error");
            parent.querySelector("p").innerText = "this field is required.";
            validator = false;
        } else if (inputMonth.value > 12) {
            inputMonth.classList.add("error");
            inputMonth.parentElement.querySelector("p").innerText =
                "must be valid month.";
            validator = false;
        } else if (inputDay.value > 31) {
            inputDay.classList.add("error");
            inputDay.parentElement.querySelector("p").innerText =
                "must be valid day.";
            validator = false;
        } else if (inputYear.value > year) {
            inputYear.classList.add("error");
            inputYear.parentElement.querySelector("p").innerText =
                "Must be in the past";
            validator = false;
        } else {
            i.classList.remove("error");
            parent.querySelector("p").innerText = "";
            validator = true;
        }
    });
    return validator;
}

function animateText(targetElement, currentValue, targetValue) {
    const element = document.getElementById(targetElement);

    if (currentValue <= targetValue) {
        element.innerText = currentValue;
        currentValue += 1;

        requestAnimationFrame(() =>
            animateText(targetElement, currentValue, targetValue)
        );
    }
}
