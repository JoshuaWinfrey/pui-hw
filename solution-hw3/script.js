
let glazing = document.getElementById('glazingDropdownContent');

let packsize = document.getElementById('packsizeDropdownContent');

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

function glazingPrice() 
{
    console.log('You selected ' + this.value);
    for (let i=0; i < allGlazing.length; i++)
    {
        if(this.value === allGlazing[i].flavor)
        {
            console.log(allGlazing[i]);
            return allGlazing[i].price;
        }
    }
}

function packsizePrice() 
{
    console.log('You selected ' + this.value + ' rolls');
}

glazing.addEventListener('change', glazingPrice);
packsize.addEventListener('change', packsizePrice);