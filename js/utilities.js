//inputField Function

function showInputId(id){
   const value =  document.getElementById(id).value
   const valueNumber = parseFloat(value)

   return valueNumber

}


function showTextId(id){
    const value = document.getElementById(id).innerText
    const valueNumber = parseFloat(value)

    return valueNumber
}