
let glazing = document.getElementById('glazingDropdownContent');

let packsize = document.getElementById('packsizeDropdownContent');

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

function glazingPrice() 
{
    glazingTotal = 2.49;
    console.log('You selected ' + this.value);
    for (let i=0; i < allGlazing.length; i++)
    {
        if(this.value === allGlazing[i].flavor)
        {
            console.log(allGlazing[i]);
            glazingTotal = glazingTotal + allGlazing[i].price;
            cartTotal = glazingTotal * priceMultiplier;
            console.log(cartTotal);
        }
    }
    return cartTotal;
}

function packsizePrice() 
{
    priceMultiplier = 1;
    console.log('You selected ' + this.value + ' rolls');
    for (let i=0; i<allPacksize.length; i++)
    {
        if(this.value == allPacksize[i].quantity)
        {
            console.log(allPacksize[i]);
            priceMultiplier = allPacksize[i].adaption;
            cartTotal = glazingTotal * priceMultiplier;
            console.log(cartTotal);
        }
    }
    return cartTotal;
}

glazing.addEventListener('change', glazingPrice);
packsize.addEventListener('change', packsizePrice);
