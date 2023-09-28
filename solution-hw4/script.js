
//assigning html variables

let glazing = document.getElementById('glazingDropdownContent');
let packsize = document.getElementById('packsizeDropdownContent');
let cartTotalElement = document.getElementById('addToCartText');
let cartTitle = document.getElementById('pageTitle');


let glazingTotal = 2.49; //setting a baseline for the glazing price
let priceMultiplier = 1; //setting a baseline for the packsize multiplier
let cartTotal = glazingTotal * priceMultiplier; //creating formula for cart total

//glazing array

let allGlazing = [
    {
        flavor: 'Keep original',
        price: 0,
    },
    {
        flavor: 'Sugar milk',
        price: 0,
    },
    {
        flavor: 'Vanilla milk',
        price: 0.50,
    },
    {
        flavor: 'Double chocolate',
        price: 1.50,
    }
]

//Pack size array
let allPacksize = [
    {
        quantity: 1,
        adaption: 1,
    },
    {
        quantity: 3,
        adaption: 3,
    },
    {
        quantity: 6,
        adaption: 5,
    },
    {
        quantity: 12,
        adaption: 10,
    }
]

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
    glazingTotal = 2.49; // resetting the base price to 2.49
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







