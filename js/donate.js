document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const donateNoakhaliValue = getInputFieldValueById("donate-amount-n");
    const myBalance = document.getElementById("my-balance").innerText;
    const myBalanceNumber = parseFloat(myBalance);
    if (
      donateNoakhaliValue > myBalanceNumber ||
      isNaN(donateNoakhaliValue) ||
      donateNoakhaliValue < 0
    ) {
      return alert("Invaild Donate Amount");
    }
    const totalAmountForNoakhali = document.getElementById(
      "total-amount-for-noakhali"
    ).innerText;
    const totalAmountForNoakhaliNumber = getTheTotalDonate(
      "total-amount-for-noakhali"
    );
    const newAmountForNoakhali =
      totalAmountForNoakhaliNumber + donateNoakhaliValue;
    document.getElementById("total-amount-for-noakhali").innerText =
      newAmountForNoakhali;

    const myNewBalance = myBalanceNumber - donateNoakhaliValue;
    document.getElementById("my-balance").innerText = myNewBalance;
    const dialog = document.getElementById("my_modal_4");
    dialog.showModal();

    document.getElementById("history-container").innerHTML += `
    <div class="border p-6 w-3/4 mx-auto rounded-lg space-y-2">
    <p class="text-semibold text-primary">${donateNoakhaliValue} Taka is Donated for Flood Relif in Noakhali, Bangladesh</p>
    <p>${new Date().toString()}</p>
    </div>
    `;
  });

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const donateFeniValue = getInputFieldValueById("donate-amount-f");
    const myBalance = document.getElementById("my-balance").innerText;
    const myBalanceNumber = parseFloat(myBalance);
    if (
      donateFeniValue > myBalanceNumber ||
      isNaN(donateFeniValue) ||
      donateFeniValue < 0
    ) {
      return alert("Invaild Donate Amount");
    }
    const totalAmountForFeniNumber = getTheTotalDonate("total-amount-for-feni");
    const newAmountForFeni = totalAmountForFeniNumber + donateFeniValue;

    document.getElementById("total-amount-for-feni").innerText =
      newAmountForFeni;
    const myNewBalance = myBalanceNumber - donateFeniValue;
    document.getElementById("my-balance").innerText = myNewBalance;

    const dialog = document.getElementById("my_modal_4");
    dialog.showModal();
    document.getElementById("history-container").innerHTML += `
    <div class="border p-6 w-3/4 mx-auto rounded-lg space-y-2">
    <p class="text-semibold text-primary">${donateFeniValue} Taka is Donated for Flood Relif in Feni, Bangladesh</p>
    <p>${new Date().toString()}</p>
    </div>
    `;
  });

document
  .getElementById("btn-donate-quata-movement")
  .addEventListener("click", function () {
    const donateQuataMovementValue = getInputFieldValueById(
      "quata-movement-donate-amount"
    );
    const myBalance = document.getElementById("my-balance").innerText;
    const myBalanceNumber = parseFloat(myBalance);
    if (
      donateQuataMovementValue > myBalanceNumber ||
      isNaN(donateQuataMovementValue) ||
      donateQuataMovementValue < 0
    ) {
      return alert("Invaild Donate Amount");
    }
    const quataMovementTotalDonate = getTheTotalDonate(
      "total-amount-for-quata-movement"
    );
    const totalDonateAmountofQuataMovement =
      quataMovementTotalDonate + donateQuataMovementValue;
    console.log(totalDonateAmountofQuataMovement);
    document.getElementById("total-amount-for-quata-movement").innerText =
      totalDonateAmountofQuataMovement;
    const myNewBalance = myBalanceNumber - donateQuataMovementValue;
    document.getElementById("my-balance").innerText = myNewBalance;

    const dialog = document.getElementById("my_modal_4");
    dialog.showModal();

    document.getElementById("history-container").innerHTML += `
<div class="border p-6 w-3/4 mx-auto rounded-lg space-y-2">
<p class="text-semibold text-primary">${donateQuataMovementValue} Taka is Donated for Aid for Injured in the Quata Movement, Bangladesh</p>
<p>${new Date().toString()}</p>
</div>
`;
  });
