if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addToCartButtons = document.getElementsByClassName('item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-checkout')[0].addEventListener('click', checkoutClicked)
}

function addToCartClicked(event){
    var button = event.target
    var item = button.parentElement.parentElement
    var title = item.getElementsByClassName('item-title')[0].innerText
    var price = item.getElementsByClassName('item-price')[0].innerText
    addItemToCart(title,price)
}

function addItemToCart(title,price){
    // Function to add items to the cart
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i = 0; i< cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item is already added to the cart. Go to cart to increase the quantity of this item.')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" type="button">Remove</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click',removeClicked)
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function removeClicked(event){
    // Function to remove items from the cart
    var button = event.target
    button.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    // Function to update cart total 
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItems.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i< cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs.',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('total-price')[0].innerText = 'Rs.' + total
}

function checkoutClicked(){
    // Function to open checkout page 
    var total = document.getElementsByClassName('total-price')[0].innerText
    if(total == 'Rs.0'){
        alert('Add an item to cart to checkout.')
    }
    else{
        localStorage.setItem('totalValue',total)
        window.open('Checkout.html', '_blank',"toolbar=yes,scrollbars=yes,resizable=yes,left=300,width=700,height=700");
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()){
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }
}