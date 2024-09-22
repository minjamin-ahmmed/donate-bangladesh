const cardNoakhali = document.getElementById('card-noakhali')
const cardFeni = document.getElementById('card-feni')
const cardQouta = document.getElementById('card-qouta')
const donationBtn = document.getElementById('donation-btn')
const noakhaliDonateBtn = document.getElementById('noakhali-donate')
const noakhaliField = document.getElementById('noakhali-field')
const historyBtn = document.getElementById('history-btn')
const noakhaliDonation = document.getElementById('noakhali-donation')
const myBalance = document.getElementById('balance')
const locationNoakhali = document.getElementById('location-noakhali')
const history = document.getElementById('history-div')
const modal = document.getElementById('my-modal')

//History Button
historyBtn.addEventListener('click', function(){

cardNoakhali.classList.add('hidden')
cardFeni.classList.add('hidden')
cardQouta.classList.add('hidden')

historyBtn.classList.add('bg-[#B4F461]')
historyBtn.classList.remove('border-[#1111116c]')

donationBtn.classList.remove('bg-[#B4F461]')

history.classList.remove('hidden');
    
})


//Donation Button
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('bg-[#B4F461]')

    cardNoakhali.classList.remove('hidden')
    cardFeni.classList.remove('hidden')
    cardQouta.classList.remove('hidden')

})


//Noakhali Donate Button
noakhaliDonateBtn.addEventListener('click', function(){

    const noakhaliDonationAmount = showTextId('noakhali-donation')
    const inputFieldNumber = showInputId('noakhali-field')
    const myCurrentBalance = showTextId('balance')

    console.log('Input Field Number:', inputFieldNumber);
    console.log('Noakhali Donation Amount:', noakhaliDonationAmount);
    console.log('Current Balance:', myCurrentBalance);


    if(inputFieldNumber > myCurrentBalance ||  isNaN(inputFieldNumber) || 
    inputFieldNumber <= 0 || 
    isNaN(noakhaliDonationAmount) || noakhaliField.value === ''){

        return alert("❌ Please Check Again")
    }


    else{ 

    let totalDonation = inputFieldNumber + noakhaliDonationAmount

    //Card Balance Increased
    document.getElementById('noakhali-donation').innerText = totalDonation

    //Total Balance Decreased
    let currentBalance = myCurrentBalance - inputFieldNumber
    document.getElementById('balance').innerText = currentBalance


    let donationDate = new Date();

   let noakhaliLocation =  document.getElementById('location-noakhali').innerText

   let cause = document.getElementById('cause-noakhali').innerText

    // const historySection = document.getElementById('history-div')

    history.innerHTML += `<div class="border border-gray-200 rounded-xl p-4 shadow-md my-5">
    <p class="font-bold">${inputFieldNumber} Taka is Donated for ${cause} ${noakhaliLocation}</p>
    <p class="text-sm text-gray-500">Date: ${donationDate}</p>
    <div>`

    document.getElementById('noakhali-field').value = ''

    modal.classList.remove('hidden')
    }
    
})


//Modal Close Button
document.getElementById("noakhali-close-modal-btn").addEventListener("click", function(){
    modal.classList.add('hidden')
})