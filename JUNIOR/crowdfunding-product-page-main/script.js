document.addEventListener("DOMContentLoaded", function () {
  const rewardBtns = document.querySelectorAll("#reward-btn");
  const stockElements = document.querySelectorAll(".stock-count");
  const modalStockElements = document.querySelectorAll(".modal-stock-count");

  rewardBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const pledgeInput = btn
        .closest(".reward-form")
        .querySelector("#pledge-input");
      const pledgeAmount = parseInt(pledgeInput.value, 10);
      const pledgeElement = btn.closest(".reward").querySelector(".pledge");
      const minPledge = pledgeElement
        ? parseInt(pledgeElement.textContent.match(/\d+/)[0], 10)
        : 0;

      if (pledgeAmount >= minPledge) {
        console.log(stockElements)
        const stockElement = stockElements[index - 1];
        const modalStockElement = modalStockElements[index -1];
        let stockCount = parseInt(stockElement.textContent, 10);
        console.log(stockCount);
        if (stockCount > 0) {
          stockCount--;
          stockElement.textContent = stockCount;
          modalStockElement.textContent = stockCount;
        }

        $("#pledgeModal").modal("hide");
        $("#completeModal").modal("show");
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
  const modal = document.querySelector("#pledgeModal");
  modal.classList.remove("show");
  modal.style = "display:none";
}
