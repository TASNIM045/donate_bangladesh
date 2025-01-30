// HISTORY BUTTON

document.getElementById('history-button').addEventListener('click', function () {
    let donationArea = document.getElementById('donation-area');
    donationArea.classList.add('hidden');
    let historyArea = document.getElementById('history-area');
    historyArea.classList.remove('hidden');
})


