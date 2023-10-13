
//empty array for cart
cart = [];

//setting base values then getting roll type from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);

rollType = params.get('roll');
rollPrice = rolls[rollType].basePrice;
imagePath = rolls[rollType].imageFile;

//assigning html variables

let glazing = document.getElementById('glazingDropdownContent');
let packsize = document.getElementById('packsizeDropdownContent');
let cartTotalElement = document.getElementById('addToCartText');

let glazingTotal = rollPrice; //setting a baseline for the glazing + roll price
let priceMultiplier = 1; //setting a baseline for the packsize multiplier
let cartTotal = glazingTotal * priceMultiplier; //creating formula for cart total

//setting base price on detail page
addToCartText.innerText = '$ ' + rollPrice;


// adding Glazing options to select
for (let i = 0; i<allGlazing.length; i++)
{
var option = document.createElement('option');
option.text = allGlazing[i].flavor;
option.value = allGlazing[i].price;
glazing.add(option);
}

//adding Pack size options to select
for (let i = 0; i<allPacksize.length; i++)
{
var option = document.createElement('option');
option.text = allPacksize[i].quantity;
option.value = allPacksize[i].adaption;
packsize.add(option);
}

function glazingChange() 
{
    glazingTotal = rollPrice; // resetting the base price to that of the roll
    glazingTotal = glazingTotal + parseFloat(this.value); //adding additional glazing price
    cartTotal = glazingTotal * priceMultiplier; //multiplying glazing price by packsize adaption for cart total
    cartTotalElement.innerText = '$ ' + (Math.round(cartTotal*100)/100).toFixed(2); //changing cart price in html to 2 decimal places
}

function packsizeChange() 
{
    priceMultiplier = this.value; //setting the packsize adaption as the price multiplier
    cartTotal = glazingTotal * priceMultiplier; //multiplying the current glazing price by the multiplier for cart total
    cartTotalElement.innerText = '$ ' + (Math.round(cartTotal*100)/100).toFixed(2); //changing cart price in html to 2 decimal places
}

glazing.addEventListener('change', glazingChange); //adding glazing change event listener
packsize.addEventListener('change', packsizeChange); //adding packsize change event listener



// HW4


let detailPageTitle = document.getElementById('detailPageTitle');
let detailPageImage = document.getElementById('detailPageImage');
let newImagePath = "../assets/products/" + imagePath;
let rollTail = " Cinnamon Roll";

detailPageTitle.innerText = rollType + rollTail;
detailPageImage.src = newImagePath;

let atcButton = document.getElementById('addToCartButton');

class Roll {
    constructor(rollType, glazing, packsize, rollPrice) {
        this.rollType = rollType;
        this.glazing = glazing;
        this.packsize = packsize;
        this.rollPrice = rollPrice;
    }
}

function pushToCart() {

    let newRoll = new Roll(rollType, glazing.options[glazing.selectedIndex].text, packsize.options[packsize.selectedIndex].text, rollPrice);
    cart.push(newRoll);
    console.log(cart);
    localStorage.setItem('rollType',newRoll.rollType);
    localStorage.setItem('glazing',newRoll.glazing);
    localStorage.setItem('packsize',newRoll.packsize);
    parseFloat(localStorage.setItem('rollPrice',newRoll.rollPrice));
}


atcButton.addEventListener('click', pushToCart);













