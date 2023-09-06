const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice-text");
const button = document.getElementById("button");

function randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random() * 220) + 1;
    return randomNumber;
}

button.addEventListener("click", () => {
    randomNumber = randomNumberGenerator();
    fetchAdvice(randomNumber);
});

const fetchAdvice = async (idNumber) => {
    await fetch(`https://api.adviceslip.com/advice/${idNumber}`)
        .then((resp) => {
            return resp.json();
        })
        .then((res) => {
            const adviceO = res.slip;
            adviceId.textContent = "Advice #" + adviceO.id;
            advice.textContent = adviceO.advice;
        })
        .catch((err) => {
            adviceId.textContent = "This advice is not available";
            advice.textContent = "Plese press the button again";
        });
};
