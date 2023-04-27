// function double(num) {
//   const result = num * 2;
//   return result;
// }
// const first =double(5)







//deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depoInput = document.getElementById('deposit-input');
    const newDepoAmount = depoInput.value;

    const depoTotal = document.getElementById('depo-total')
    const previousDepoAmount = depoTotal.innerText;

    const newDepoTotal = parseFloat(previousDepoAmount) + parseFloat(newDepoAmount);
    depoTotal.innerText = newDepoTotal;
  


    ////balance add when deposit
    const mainBalance = document.getElementById('balance-total')
    const previousBalance = mainBalance.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(newDepoAmount);
    mainBalance.innerText = totalBalance;

    depoInput.value='';
});


//widthdraw
document.getElementById("widthdraw-btn").addEventListener('click', function () {
  const WidthInput = document.getElementById("widthdraw-input");
  const newWidthAmount = WidthInput.value;

  const widthdrawTotal = document.getElementById("widthdraw-total");
  const previousWidthAmount = widthdrawTotal.innerText;

  const newWidthTotal =
    parseFloat(previousWidthAmount) + parseFloat(newWidthAmount);
  widthdrawTotal.innerText = newWidthTotal;

  ////balance when widthdraw
    const WidthMainBalance = document.getElementById("balance-total");
    const widthdrawBalance = WidthMainBalance.innerText;
    const newTotalBalance = parseFloat(widthdrawBalance) - parseFloat(newWidthAmount);
    WidthMainBalance.innerText = newTotalBalance;

    WidthInput.value='';
});