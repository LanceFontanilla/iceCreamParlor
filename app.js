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
    name: 'Fairy Fun',
    price: 4,
    quantity: 0
},
{
    name: 'Berry Swirl',
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

function buyTopping(toppingName) {
    let foundTopping = toppings.find(topping => topping.name == toppingName)
    foundTopping.quantity++
    console.log('buying topping', foundTopping)
    drawCart()
}

function buyVessel(vesselName) {
    let foundVessel = vessels.find(vessel => vessel.name == vesselName)
    foundVessel.quantity++
    console.log('buying vessel', foundVessel)
    drawCart()
}



function drawCart() {
    let template = ''
    iceCreams.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            template += `  <div class=" d-flex justify-content-between  fs-3">
                            <span>${iceCream.name}</span>
                            <span>${iceCream.quantity}</span>
                            <span>$${iceCream.price.toFixed(2)}</span>
                            <span></span>
                           </div>
                         `
        }
    })
    vessels.forEach(vessel => {
        if (vessel.quantity > 0) {
            template += `  <div class=" d-flex justify-content-between  fs-3">
                            <span>${vessel.name}</span>
                            <span>${vessel.quantity}</span>
                            <span>$${vessel.price.toFixed(2)}</span>
                            <span></span>
                           </div>
                         `
        }
    })
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            template += `  <div class=" d-flex justify-content-between  fs-3">
                            <span>${topping.name}</span>
                            <span>${topping.quantity}</span>
                            <span>$${topping.price.toFixed(2)}</span>
                            <span></span>
                           </div>
                         `
        }
    })
    console.log(template)
    cartElem.innerHTML = template
    drawTotals()
}



function drawTotals() {
    let cost = 0
    iceCreams.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            cost += iceCream.quantity * iceCream.price
        }
    })
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            cost += topping.quantity * topping.price
        }
    })
    vessels.forEach(vessels => {
        if (vessels.quantity > 0) {
            cost += vessels.quantity * vessels.price
        }
    })


    console.log('total', cost)

    totalElem.innerText = cost.toFixed(2)

}

function pay() {
    if (window.confirm('Are you ready to pay?')) {
        toppings.forEach(topping => topping.quantity = 0)
        iceCreams.forEach(iceCream => iceCream.quantity = 0)
        vessels.forEach(vessel => vessel.quantity = 0)

        console.log('pay', toppings, vessels, iceCreams)

        drawCart()
    }
}
