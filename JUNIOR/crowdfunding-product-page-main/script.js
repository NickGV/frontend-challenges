document.addEventListener("DOMContentLoaded", function() {
  const rewardBtns = document.querySelectorAll("#reward-btn");
  rewardBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const pledgeInput = btn.closest('.reward-form').querySelector('#pledge-input');
      const pledgeAmount = parseInt(pledgeInput.value, 10);
      const pledgeElement = btn.closest('.reward').querySelector('.pledge');
      const minPledge = pledgeElement ? parseInt(pledgeElement.textContent.match(/\d+/)[0], 10) : 0;

      if (pledgeAmount >= minPledge) {
        $('#pledgeModal').modal('hide');
        $('#completeModal').modal('show');
      } else {
        alert(`Please enter a pledge of at least $${minPledge}`);
      }
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
    const rewardBtn = reward.querySelector("#reward-btn");
    if (rewardBtn) {
      rewardBtn.addEventListener("click", (event) => {
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
