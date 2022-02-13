function updateCaseNumber (product, price,  isIncreasing){
  let number = document.getElementById( product + '-number');
  let result = number.value; 
  if(isIncreasing == true){
    result = Number(result) + 1;
  }
  else if(result > 0  ){
    result = Number(result) - 1
  }
   number.value = result

// update total price 
  const totalPrice = document.getElementById(product + '-total');
  totalPrice.innerText = result * price;

  calculateTotal()

}



function getInputValue(product){
  const productInput = document.getElementById(product +'-number' );
  const productNumber = Number(productInput.value);
  return productNumber;
}



function calculateTotal(){
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxAmount = subTotal / 10

  const totalPrice = subTotal + taxAmount

  // display on ui 
  document.getElementById('sub-total').innerText =subTotal;
  document.getElementById('tax-amount').innerText = taxAmount;
  document.getElementById('total-price').innerText = totalPrice;
}


// phone  handle event  
document.getElementById('phone-plus').addEventListener('click', function(){
 
  updateCaseNumber('phone' , 1219 ,  true)

})


document.getElementById('phone-minus').addEventListener('click' , function(){
  updateCaseNumber('phone' , 1219 ,  false)
})

document.getElementById('phone-minus').addEventListener('click' , function(){
  console.log('click minus btn');
})





// cover handle  event phone case/cover plus and minus
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case' , 59 ,  true)
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case' , 59,  false)
});


