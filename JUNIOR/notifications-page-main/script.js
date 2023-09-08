const markAll = document.getElementById("mark-all");
const notificationCount = document.getElementById("notification-count");

const notificationContainer = document.querySelectorAll("#to-read");

markAll.addEventListener("click", () => {
    console.log("hola");
    notificationContainer.forEach((element) => {
        element.classList.remove("to-read");
    });
    notificationCount.textContent = 0;
});

notificationContainer.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.remove("to-read");
        notificationCount.textContent = notificationCount.textContent - 1;
    });
});
