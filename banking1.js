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

function updateBalance(balanceTotal, InputAmount ,isAdd  ) {
  const mainBalance = document.getElementById(balanceTotal);
  const previousBalance = mainBalance.innerText;
  if (isAdd == true) {
    const totalBalance = parseFloat(previousBalance) + parseFloat(InputAmount);
    mainBalance.innerText = totalBalance;
  }
  else {
    const totalBalance = parseFloat(previousBalance) - parseFloat(InputAmount);
     mainBalance.innerText = totalBalance;
  }
 
}

//deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
    const InputAmount = getInputValue("deposit-input");
    updateTotalField('depo-total' , InputAmount);
  ////balance add when deposit
  updateBalance("balance-total", InputAmount ,true);
  depoInput.value = "";
});

//widthdraw
document.getElementById("widthdraw-btn").addEventListener("click", function () {
    const InputAmount = getInputValue("widthdraw-input");
    updateTotalField("widthdraw-total", InputAmount);
  ////balance when widthdraw
  updateBalance("balance-total", InputAmount,false);
  previousBalance.value = "";
});
