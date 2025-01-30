// HISTORY BUTTON

document.getElementById('history-button').addEventListener('click', function () {
    let donationArea = document.getElementById('donation-area');
    donationArea.classList.add('hidden');
    let historyArea = document.getElementById('history-area');
    historyArea.classList.remove('hidden');
})

document.getElementById('noakhali-flood-donation').addEventListener('click', function () {

    let totalInput = parseFloat(document.getElementById('noakhali-donation-input').value);

    if (totalInput > 0 && isNaN(totalInput) == false) {
        let currentTime = new Date().toLocaleDateString();

        document.getElementById('history-area').innerHTML += `
        <div class="border border-gray-200 rounded-lg">
        <div class="p-6 space-y-3">
        <h1 class="text-lg lg:text-xl font-bold">${totalInput} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h1>
        <p class="text-gray-500">Donated on: ${currentTime}</p>
        </div>
        </div>
        `
    }
})

document.getElementById('feni-flood-donation').addEventListener('click', function () {

    let totalInput = parseFloat(document.getElementById('feni-donation-input').value);

    if (totalInput > 0 && isNaN(totalInput) == false) {
        let currentTime = new Date().toLocaleString();

        document.getElementById('history-area').innerHTML += `
        <div class="border border-gray-200 rounded-lg">
        <div class="p-6 space-y-3">
        <h1 class="text-lg lg:text-xl font-bold">${totalInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
        <p class="text-gray-500">Donated on: ${currentTime}</p>
        </div>
        </div>
        `

    }
})

document.getElementById('quota-donation').addEventListener('click', function () {

    let totalInput = parseFloat(document.getElementById('quota-donation-input').value);

    if (totalInput > 0 && isNaN(totalInput) == false) {
        let currentTime = new Date().toLocaleString();

        document.getElementById('history-area').innerHTML += `
        <div class="border border-gray-200 rounded-lg">
        <div class="p-6 space-y-3">
        <h1 class="text-lg lg:text-xl font-bold">${totalInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p class="text-gray-500">Donated on: ${currentTime}</p>
        </div>
        </div>
        `
    }
})