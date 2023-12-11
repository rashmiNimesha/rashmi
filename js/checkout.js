window.onload = function() {
  // Getting the total value from product page
    var value = localStorage.getItem('totalValue')
    var output = document.getElementById('total-value')
    output.innerText = value
  }

  function makePaymenyClicked(){
    // Validating the checkout page
    var fullName = document.getElementsByClassName('fullName')[0].value
    var email = document.getElementsByClassName('email')[0].value
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var address = document.getElementsByClassName('address')[0].value
    var city = document.getElementsByClassName('city')[0].value
    var province = document.getElementsByClassName('province')[0].value
    var postalCode = document.getElementsByClassName('postalCode')[0].value
    var country = document.getElementsByClassName('country')[0].value
    var cardName = document.getElementsByClassName('cardName')[0].value
    var cardNumber = document.getElementsByClassName('cardNumber')[0].value
    var expMonth = document.getElementsByClassName('expMonth')[0].value
    var expYear = document.getElementsByClassName('expYear')[0].value
    var cvv = document.getElementsByClassName('cvv')[0].value
    if (fullName == "") {
      alert('Name cannot be blank!')
    }
    else if (!/^[a-zA-Z ]*$/g.test(fullName)){
      alert('Name should only contain letters!')
    }
    else if(email == ""){
      alert('Email cannot be blank!')
    }
    else if(!re.test(email)){
      alert('Email is in incorrect format!')
    }
    else if(address == ""){
      alert('Address cannot be blank!')
    }
    else if(city == ""){
      alert('City cannot be blank!')
    }
    else if (!/^[a-zA-Z ]*$/g.test(city)){
      alert('City should only contain letters!')
    }
    else if(province == ""){
      alert('Province cannot be blank!')
    }
    else if (!/^[a-zA-Z ]*$/g.test(province)){
      alert('Province should only contain letters!')
    }
    else if(postalCode == ""){
      alert('Postal Code cannot be blank!')
    }
    else if(postalCode.length != 5){
      alert('Postal code should only contain 5 digits!')
    }
    else if(country == ""){
      alert('Country cannot be blank!')
    }
    else if (!/^[a-zA-Z ]*$/g.test(country)){
      alert('Country should only contain letters!')
    }
    else if(cardName == ""){
      alert('Card Name cannot be blank!')
    }
    else if (!/^[a-zA-Z ]*$/g.test(cardName)){
      alert('Card Name should only contain letters!')
    }
    else if(cardNumber == ""){
      alert('Card Number Code cannot be blank!')
    }
    else if(cardNumber.length != 16){
      alert('Card Number is in incorrect format!')
    }
    else if(expMonth == ""){
      alert('Exp Month cannot be blank!')
    }
    else if (!/^[a-zA-Z ]*$/g.test(expMonth)){
      alert('Exp Month should only contain letters!')
    }
    else if(expYear == ""){
      alert('Exp Year cannot be blank!')
    }
    else if(expYear.length != 4){
      alert('Exp Year is in incorrect format!')
    }
    else if(cvv == ""){
      alert('CVV cannot be blank!')
    }
    else if(cvv.length != 4){
      alert('CVV is in incorrect format!')
    }
    else{
      alert('Thank you for your purchase!')
      window.close()
    }
  }