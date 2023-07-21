function getInputValue(filedId) {
    const inputFiled = document.getElementById(filedId);
    const valueInText = inputFiled.value;
    const value = parseFloat(valueInText);
    inputFiled.value = '';
    return value;
}
function updateTotal(filedId, amount) {
    const totalTag = document.getElementById(filedId);
    const previousTotalIntext = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalIntext);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;

}
function updateBlance(amount, isAdding) {
    const blanceTag = document.getElementById('blance-total');
    const blanceText = blanceTag.innerText;
    const previousBlance = parseFloat(blanceText);
    let newBlance;
    if (isAdding == true) {
        newBlance = previousBlance + amount;
    }
    else {
        newBlance = previousBlance - amount;
    }
    blanceTag.innerText = newBlance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount)
    updateBlance(amount, true);
})
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-button');
    updateTotal('withdraw-total', amount)
    updateBlance(amount, false);
})