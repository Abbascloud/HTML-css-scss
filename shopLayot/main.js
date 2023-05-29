
const  DATA_GOODS = [
    {
        id: Math.random(),
        img: "data/img/products/product1.png",
        title: 'Zara',
        discription: 'kleviy tovar',
        price: 101,
    },
    {
        id: Math.random(),
        img: "data/img/products/product2.png",
        title: 'daasdas',
        discription: 'kleviy tovar',
        price: 10,
    },
    {
        id: Math.random(),
        img: "data/img/products/product3.png",
        title: 'bike',
        discription: 'kleviy tovar',
        price: 10,
    },
    {
        id: Math.random(),
        img: "data/img/products/product4.png",
        title: 'nike',
        discription: 'kleviy tovar',
        price: 10,
    },
    {
        id: Math.random(),
        img: "data/img/products/product5.png",
        title: 'bershka',
        discription: 'kleviy tovar5',
        price: 10,
    },
    {
        id: Math.random(),
        img: "data/img/products/product6.png",
        title: 'adidas',
        discription: 'kleviy tovar6',
        price: 10,
    }

]
const CART = []
const cardsRoot = document.querySelector('#goods-root')

const makeGoodsHtml = (card) => { 
    return      `         
       <div class="b-productCards__item b-productCard">
        <div class="b-productCard__imgHolder">
        <div class="b-productCard__imgDark hidden"><button class="b-productCard__imgButton"><img class="b-productCard__imgCart" src="data/icons/white__basket.svg" alt="cart"><span class="b-productCard__imgCartText">Add to Cart</span></button></div> <img src="${card.img}"
            alt="good" class="b-productCard__img"></div>
        <h3 class="b-productCard__header">${card.title}/h3>
        <p class="b-productCard__description">${card.discription}</p>
        <p class="b-productCard__price">$<span>${card.price}</span></p>
        <button data-id="${card.id}" data-title="${card.title}" data-price="${card.price}"class="b-productCard__button">ADD</button>
        </div>
    `
}

const render = (data, containerHtml, htmlMaker) => {
    data.forEach(element => {
        containerHtml.insertAdjacentHTML('beforeend', htmlMaker(element))
    });  
}

const clickHandler = (event) => {
    if(event.target.classList.contains('b-productCard__button')){
        addToCart(event.target.dataset)
    }
    console.log(CART);
}

const addToCart = (cardData) => {
   const goodInCart = CART.find(element => cardData.id === element.id)
   if(goodInCart){
        goodInCart.amount++
   }else{
        CART.push({
            ...cardData, amount:1
        })
   }
}

const makeCartHtml = () => {

}
const removeFromCardById = () => {

}
const incrice = () => {

}
const getTotalsum = () => {
    
}
render(DATA_GOODS, cardsRoot, makeGoodsHtml)
document.addEventListener('click', clickHandler)
