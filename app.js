const iceCreams = [{
    name: 'Vanilla',
    price: 3,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 4,
    quantity: 0
},
{
    name: 'Birthday Cake',
    price: 4,
    quantity: 0
},
{
    name: 'Strawberry Swirl',
    price: 3,
    quantity: 0
},
{
    name: 'Creme Brulee',
    price: 5,
    quantity: 0
},
{
    name: 'Butterscotch',
    price: 4,
    quantity: 0
},
]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    quantity: 0,
    price: 1
},
{
    name: 'Waffle Bowl',
    price: 2,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 3,
    quantity: 0
}]


let cartElem = document.getElementById('cart')
let subTotalElem = document.getElementById('subtotal')
let totalElem = document.getElementById('total')


function orderVanilla() {
    let vanilla = iceCreams.find(iceCream => iceCream.name = 'Vanilla')
    vanilla.quantity++
    drawCart()
    console.log('order vanilla', vanilla)
}

function buyIceCream(iceCreamName) {
    let foundIceCream = iceCreams.find(icecream => icecream.name == iceCreamName)
    foundIceCream.quantity++
    console.log('buying icecream', foundIceCream)
    drawCart()
}



function drawCart() {
    let template = ''
    iceCreams.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            template += `  <div class=" d-flex justify-content-between  fs-3">
                            <span>${iceCream.name}</span>
                            <span>${iceCream.quantity}</span>
                            <span>${iceCream.price}</span>
                            <span>${subTotal}</span>
                           </div>
                         `

        }
        console.log(template)
    })
    cartElem.innerHTML = template
    drawTotals()
}

let subTotal = 0
function drawTotals() {
    iceCreams.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            subTotal += iceCream.quantity * iceCream.price
        }
        console.log('subtotal', subTotal)
    })

}