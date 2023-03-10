const addItems = () => {
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    itemsShow(product, quantity)
    saveLocalDeviceShoppingCard(product, quantity)

}

const itemsShow = (product, quantity) => {
    const ul = document.getElementById("container");
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCard = () => {
    let card = {};
    const storedCard = localStorage.getItem('card');
    if (storedCard) {
        card = JSON.parse(storedCard);
    }
    return card;
}
const saveLocalDeviceShoppingCard = (product, quantity) => {
    const card = getStoredShoppingCard();
    card[product] = quantity;
    const cardStringiFied = JSON.stringify(card);
    localStorage.setItem('card', cardStringiFied);
}

const displayProductFormLocalStor = () => {
    const saveCard = getStoredShoppingCard();
    for (const product in saveCard) {
        const quantity = saveCard[product];
        itemsShow(product, quantity);
    }
}
displayProductFormLocalStor();