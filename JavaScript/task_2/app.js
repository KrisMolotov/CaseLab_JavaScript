const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    if (order.includes(products[productId - 1]))
    {
        alert("Товар уже в корзине!")
    }
    else
    {
        order.push(products[productId - 1])
    }
    // TODO: если товар еще не в корзине, добавить его из массива products

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    let index
    for(let i = 0; i < order.length; i += 1)
    {
        if(productId === order[i].id)
        {
            index = order.indexOf(order[i])
        }
    }
    order.splice(index, 1)
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа
    document.getElementById('total').innerText = order.reduce(function (accumulator, item, index, array) {
        return accumulator + array[index].price
    }, 0);
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}