const previusTime = document.querySelectorAll(".previus-time");
const currentTime = document.querySelectorAll(".current-time");
const buttons = document.querySelectorAll(".buttons");

const getTime = async () => {
    const res = await fetch(
        `https://raw.githubusercontent.com/jmblack15/Time-tracking-dashboard/main/data.json`
    );
    const data = res.json();
    return data;
};

buttons.forEach(async (button) => {
    let data = await getTime();

    button.addEventListener("click", () => {
        buttons.forEach((button) => {
            button.classList.remove("active");
        });
        button.classList.add("active");

        const period = button.dataset.period;
        currentTime.forEach((current) => {
            let activity;
            for (const item of data) {
                if (item.title === current.dataset.activity) {
                    activity = item;
                    break;
                }
            }
            current.textContent = activity.timeframes[period].current + "hrs";
        });

        previusTime.forEach((previus) => {
            let activity;
            for (const item of data) {
                if (item.title === previus.dataset.activity) {
                    activity = item;
                    break;
                }
            }
            previus.textContent =
                "Previus - " + activity.timeframes[period].previous + "hrs";
        });
    });
});
