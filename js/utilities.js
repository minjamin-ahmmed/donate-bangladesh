//inputField Function

function showInputId(id){
   const value =  document.getElementById(id).value
   const valueNumber = parseFloat(value)

   return valueNumber

}

//Text Value Function
function showTextId(id){
    const value = document.getElementById(id).innerText
    const valueNumber = parseFloat(value)

    return valueNumber
}


//Modal Close Function
// function modalClose(id){
    
//     let close = id.classList.add('hidden')
//     return close
// }

// function setNumText(id, num) {
//     document.getElementById(id).innerText = num;
// }