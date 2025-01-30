// HISTORY BUTTON

document.getElementById('history-button').addEventListener('click',function(){
    let donationArea = document.getElementById('donation-area');
    donationArea.classList.add('hidden');
    let historyArea = document.getElementById('history-area');
    historyArea.classList.remove('hidden');
})


// DONATION BUTTON  

document.getElementById('donation-button').addEventListener('click',function(){
    let donationArea = document.getElementById('donation-area');
    donationArea.classList.remove('hidden');
    let historyArea = document.getElementById('history-area');
    historyArea.classList.add('hidden');
})