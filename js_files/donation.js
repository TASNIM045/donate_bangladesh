// DONATION BUTTON  

document.getElementById('donation-button').addEventListener('click', function () {
    let donationArea = document.getElementById('donation-area');
    donationArea.classList.remove('hidden');
    let historyArea = document.getElementById('history-area');
    historyArea.classList.add('hidden');
})

document.getElementById('noakhali-flood-donation').addEventListener('click', function () {
    let totalForNoakhali = parseFloat(document.getElementById('noakhali-total-donation').innerText);
    let totalInput = parseFloat(document.getElementById('noakhali-donation-input').value);

    if (totalInput > 0 && isNaN(totalInput) == false) {
        let myBalance = parseFloat(document.getElementById('my-balance').innerText);
        if (myBalance >= totalInput) {
            let totalBalance = totalForNoakhali + totalInput;
            document.getElementById('noakhali-total-donation').innerText = totalBalance;
            
            let newBalance = myBalance - totalInput;
            document.getElementById('my-balance').innerText = newBalance;
            document.getElementById('noakhali-donation-input').value = '';
        }
        else {
            alert("You do not have enuogh money!");
        }
    }
})