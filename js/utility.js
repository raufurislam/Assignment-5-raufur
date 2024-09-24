function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getTheTotalDonate(id) {
  const totalAmountOfDonation = document.getElementById(id).innerText;
  const totalAmountOfDonationNumber = parseFloat(totalAmountOfDonation);
  return totalAmountOfDonationNumber;
}
