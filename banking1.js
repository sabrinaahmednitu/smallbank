function getInputValue(inputId) {
      const InputField = document.getElementById(inputId);
    const InputAmount = InputField.value;
    InputField.value = "";
    return InputAmount;
}

function updateTotalField(totalId,InputAmount) {
  const Total = document.getElementById(totalId);
  const previousDepoAmount = Total.innerText;

  const newDepoTotal = parseFloat(previousDepoAmount) + parseFloat(InputAmount);
  Total.innerText = newDepoTotal;
}

function getCurrentBalance() {
    const mainBalance = document.getElementById("balance-total");
  const previousBalanceText = mainBalance.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  return previousBalance;
}

function updateBalance(InputAmount ,isAdd  ) {
   const mainBalance = document.getElementById("balance-total");
  const previousBalance = getCurrentBalance();
  if (isAdd == true) {
    const totalBalance = previousBalance + parseFloat(InputAmount);
    mainBalance.innerText = totalBalance;
  }
  else {
    const totalBalance = previousBalance - parseFloat(InputAmount);
     mainBalance.innerText = totalBalance;
  }
 
}

//deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const InputAmount = getInputValue("deposit-input");
  if (InputAmount > 0) {
    updateTotalField("depo-total", InputAmount);
    ////balance add when deposit
    updateBalance( InputAmount, true);
  } 
});

//widthdraw
document.getElementById("widthdraw-btn").addEventListener("click", function () {
  const InputAmount = getInputValue("widthdraw-input");
  const currentBalance = getCurrentBalance();
  if (InputAmount > 0 && InputAmount < currentBalance) {
    updateTotalField("widthdraw-total", InputAmount);
    ////balance when widthdraw
    updateBalance(InputAmount, false);
  }
  // if (InputAmount > currentBalance) {
  //   console.log('you cant widthhdrow balance')
  // }
});
