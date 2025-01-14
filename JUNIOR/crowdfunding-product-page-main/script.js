const rewards = document.querySelectorAll(".reward");

console.log(rewards)

rewards.forEach((reward) => {
  reward.addEventListener("click", (event) => {
    rewards.forEach((reward) => {
      reward.classList.remove("active");
    });
    reward.classList.add("active");
  });
});
