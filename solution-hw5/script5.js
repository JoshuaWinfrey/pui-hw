
const glazingDictionary =
{
  'Original': 0,
  'Sugar milk': 0,
  'Vanilla milk': 0.5,
  'Double chocolate': 1.5
};

const packsizeDictionary =
{
  '1':1,
  '3':3,
  '6':5,
  '12':10
};


class Roll {
    constructor(rollType, glazing, packsize, rollPrice) {
        this.rollType = rollType;
        this.glazing = glazing;
        this.packsize = packsize;
        this.rollPrice = rollPrice;
        this.totalPrice = ((rollPrice + glazingDictionary[glazing])*packsizeDictionary[packsize]);
    }
}

const shoppingCart = new Set();

function addNewRoll(rollType, glazing, packsize, rollPrice){
    const newRoll = new Roll(rollType, glazing, packsize, rollPrice);
    shoppingCart.add(newRoll);
    createElement(newRoll);
    return newRoll;
}

function createElement(newRoll) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    newRoll.element = clone.querySelector('.cartItem');

    const btnDelete = newRoll.element.querySelector('#cartDelete');
    btnDelete.addEventListener('click', () => {
      deleteRoll(newRoll);
    });

    const shoppingCartListElement = document.querySelector('.shoppingCartBox');
    shoppingCartListElement.prepend(newRoll.element);

    updateElement(newRoll);
  }
  
  function updateElement(newRoll) {
    let cartRollImageElement = newRoll.element.querySelector('.shoppingCartImages img');
    let cartRollTitleElement = newRoll.element.querySelector('.cartItemTitle');
    let cartRollGlazingElement = newRoll.element.querySelector('.cartItemGlazing');
    let cartRollPackSizeElement = newRoll.element.querySelector('.cartItemPackSize');
    let cartRollPriceElement = newRoll.element.querySelector('.cartItemPrice');
    let cartTotalPriceElement = document.querySelector('.cartPrice');
    let totalCartPrice = getTotalCart();
    
    cartRollImageElement.src = "../assets/products/" + newRoll.rollType.toLowerCase() + "-cinnamon-roll.jpg";
    cartRollTitleElement.innerHTML = newRoll.rollType + " Cinnamon Roll";
    cartRollGlazingElement.innerHTML = "Glazing: " + newRoll.glazing;
    cartRollPackSizeElement.innerHTML = "Pack Size: " + newRoll.packsize;
    cartRollPriceElement.innerHTML = '$ ' + newRoll.totalPrice.toFixed(2);
    cartTotalPriceElement.innerHTML = totalCartPrice;
  }
  
  function deleteRoll(newRoll) {
    newRoll.element.remove();
    shoppingCart.delete(newRoll);
    updateElement(newRoll);
  }
  
  function getPriceByFlavor(flavor) {
    const glazing = allGlazing.find(item => item.flavor === flavor);
    return glazing.price;
  }

  function getPacksizeAdaption(quantity) {
    const packsize = allPacksize.find(item => item.quantity === quantity);
    return packsize.adaption;
  }

  function getTotalCart(){
    let totalCart = 0;
    for (const item of shoppingCart){
      totalCart += item.totalPrice;
    }
    return '$ ' + totalCart.toFixed(2);
  }


  let roll1 = addNewRoll("Apple","Sugar milk",3,3.49);
  let roll2 = addNewRoll("Raisin","Sugar milk",3,2.99);
  let roll3 = addNewRoll("Walnut","Vanilla milk",12,3.49);
  let roll4 = addNewRoll("Original","Sugar milk",1,2.49);

  for (const newRoll of shoppingCart) {
    console.log(newRoll);
  }









