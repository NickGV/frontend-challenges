document.addEventListener("DOMContentLoaded", function() {
  const rewardBtn = document.querySelectorAll("#reward-btn");
  rewardBtn.forEach(btn => {
    btn.addEventListener("click", function() {
      $('#pledgeModal').modal('hide');
      $('#completeModal').modal('show');
    });
  });
});

const rewards = document.querySelectorAll(".reward");

rewards.forEach((reward) => {
  reward.addEventListener("click", (event) => {
    rewards.forEach((reward) => {
      reward.classList.remove("active");
    });
    reward.classList.add("active");
    console.log(reward.querySelector("#reward-btn"));
    const rewardBtn = reward.querySelector("#reward-btn");
    if (rewardBtn) {
      console.log(rewardBtn);
      rewardBtn.addEventListener("click", (event) => {
        console.log("click");
        event.stopPropagation();
        closeModal();
        showComplete();
      });
    }
  });
});

function showComplete() {
  const complete = document.querySelector(".complete-modal");
  complete.classList.add("active");
}

function closeModal() {
  console.log("close");
  const modal = document.querySelector("#pledgeModal");
  modal.classList.remove("show");
  modal.style = "display:none";
}
