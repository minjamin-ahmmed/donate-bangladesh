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
const modalFeni = document.getElementById('my-modal-feni')
const modalQouta = document.getElementById('my-modal-qouta')

const donationFeniBtn = document.getElementById('donation-feni-btn')
const feniField = document.getElementById('feni-field')
const feniDonation = document.getElementById('feni-donation')

const qoutaField = document.getElementById('qouta-field')
const qoutaDonation = document.getElementById('qouta-donation')






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


//Modal Close Button Noakhali
document.getElementById("noakhali-close-modal-btn").addEventListener("click", function(){
    modal.classList.add('hidden')
})

//Modal Close Button NoaKhali
document.getElementById('feni-close-modal-btn').addEventListener("click", function(){
    modalFeni.classList.add('hidden')
})

//Modal Close Qouta Movement
document.getElementById("qouta-close-modal-btn").addEventListener("click",function(){
    modalQouta.classList.add('hidden')
})


//Blog-Button
document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href = "./blog.html"
})


//Feni Donate Button
donationFeniBtn.addEventListener('click', function(){
    
    const feniDonationAmount = showTextId("feni-donation")
    const inputFieldValue = showInputId("feni-field")
    const currentBalance = showTextId("balance")

    if(inputFieldValue > currentBalance || isNaN(inputFieldValue) || inputFieldValue <=0 || isNaN(feniDonationAmount) || feniField.value === ''){
        return alert("❌ Please Check Again")
    }
    else{
        let totalDonation = inputFieldValue + feniDonationAmount

        //Card Balance Increased
        document.getElementById('feni-donation').innerText = totalDonation

        //Total Balance Decreased
        let recentBalance = currentBalance - inputFieldValue
        document.getElementById('balance').innerText = recentBalance

        //Date Call
        let donationDate = new Date();


        const feniLocation = document.getElementById("feni-location").innerText
        const cause =  document.getElementById("flood-relief").innerText

        history.innerHTML += `<div class="border border-gray-200 rounded-xl p-4 shadow-md my-5">
    <p class="font-bold">${inputFieldValue} Taka is Donated for ${cause} ${feniLocation}</p>
    <p class="text-sm text-gray-500">Date: ${donationDate}</p>
    <div>`

        document.getElementById('feni-field').value = ''
        modalFeni.classList.remove('hidden')

    }

})



//Qouta Movement Button
document.getElementById("qouta-btn").addEventListener('click', function(){

    const qoutaDonationAmount = showTextId("qouta-donation")
    const inputFieldElement = showInputId("qouta-field")
    const currentBalance = showTextId("balance")

    if(inputFieldElement > currentBalance || isNaN(inputFieldElement) || inputFieldElement <=0 || isNaN(qoutaDonationAmount) || qoutaField.value === ''){
        return alert("❌ Please Check Again")
    }
    else{
        let totalDonation = inputFieldElement + qoutaDonationAmount

        //Card Balance Increased
        document.getElementById('qouta-donation').innerText = totalDonation

        //Total Balance Decreased
        let recentBalance = currentBalance - inputFieldElement
        document.getElementById('balance').innerText = recentBalance

        //Date Call
        let donationDate = new Date();


        const qoutaLocation = document.getElementById("qouta-location").innerText
        const cause =  document.getElementById("injured").innerText

        history.innerHTML += `<div class="border border-gray-200 rounded-xl p-4 shadow-md my-5">
    <p class="font-bold">${inputFieldElement} Taka is Donated for ${cause} ${qoutaLocation}</p>
    <p class="text-sm text-gray-500">Date: ${donationDate}</p>
    <div>`

        document.getElementById('qouta-field').value = ''
        modalQouta.classList.remove('hidden')
    }

})