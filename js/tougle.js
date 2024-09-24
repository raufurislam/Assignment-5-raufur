const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const cartSection = document.getElementById("card-section");

historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-button");
  donationBtn.classList.remove("bg-button");
  cartSection.classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
});

donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("bg-button");
  historyBtn.classList.remove("bg-button");
  cartSection.classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
});

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./index2.html";
});
