// DONATION BUTTON  

document.getElementById('donation-button').addEventListener('click', function () {
    let donationArea = document.getElementById('donation-area');
    donationArea.classList.remove('hidden');
    let historyArea = document.getElementById('history-area');
    historyArea.classList.add('hidden');
})

// NOAKHALI DONATION SECTION

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

// FENI DONATION SECTION 

document.getElementById('feni-flood-donation').addEventListener('click', function () {
    let totalForFeni = parseFloat(document.getElementById('feni-total-donation').innerText);
    let totalInput = parseFloat(document.getElementById('feni-donation-input').value);

    if (totalInput > 0 && isNaN(totalInput) == false) {
        let myBalance = parseFloat(document.getElementById('my-balance').innerText);
        if (myBalance >= totalInput) {
            let totalBalance = totalForFeni + totalInput;
            document.getElementById('feni-total-donation').innerText = totalBalance;

            let newBalance = myBalance - totalInput;
            document.getElementById('my-balance').innerText = newBalance;
            document.getElementById('feni-donation-input').value = '';
        }
        else {
            alert("You do not have enuogh money!");
        }
    }
})

// QUOTA DONATION SECTION 

document.getElementById('quota-donation').addEventListener('click', function () {
    let totalForQuota = parseFloat(document.getElementById('quota-total-donation').innerText);
    let totalInput = parseFloat(document.getElementById('quota-donation-input').value);

    if (totalInput > 0 && isNaN(totalInput) == false) {
        let myBalance = parseFloat(document.getElementById('my-balance').innerText);
        if (myBalance >= totalInput) {
            let totalBalance = totalForQuota + totalInput;
            document.getElementById('quota-total-donation').innerText = totalBalance;

            let newBalance = myBalance - totalInput;
            document.getElementById('my-balance').innerText = newBalance;
            document.getElementById('quota-donation-input').value = '';
        }
        else {
            alert("You do not have enuogh money!");
        }
    }
})
