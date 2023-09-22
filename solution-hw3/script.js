
let glazing = document.getElementById('glazingDropdownContent');
let packsize = document.getElementById('packsizeDropdownContent');
let cartTotalElement = document.getElementById('addToCartText');

let glazingTotal = 2.49;
let priceMultiplier = 1;
let cartTotal = glazingTotal * priceMultiplier;

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
        price: 0.5,
    },
    {
        flavor: 'Double chocolate',
        price: 1.5,
    }
]

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

function glazingChange() 
{
    glazingTotal = 2.49;
    for (let i=0; i < allGlazing.length; i++)
    {
        if(this.value === allGlazing[i].flavor)
        {
            glazingTotal = glazingTotal + allGlazing[i].price;
            cartTotal = glazingTotal * priceMultiplier;
        }
    }
    cartTotalElement.innerText = '$ ' + (Math.round(cartTotal*100)/100).toFixed(2);
}

function packsizeChange() 
{
    priceMultiplier = 1;
    for (let i=0; i<allPacksize.length; i++)
    {
        if(this.value == allPacksize[i].quantity)
        {
            priceMultiplier = allPacksize[i].adaption;
            cartTotal = glazingTotal * priceMultiplier;
        }
    }
    cartTotalElement.innerText = '$ ' + (Math.round(cartTotal*100)/100).toFixed(2);
}

glazing.addEventListener('change', glazingChange);
packsize.addEventListener('change', packsizeChange);
