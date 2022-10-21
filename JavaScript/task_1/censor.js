function censor ()
{
    let pairs = new Map()
    let string3;
    return function (string1, string2 = undefined)
    {
        if (string2 !== undefined) {
            pairs.set(string1, string2)
        } else {
            for (let pair of pairs) {
                let search = pair[0]
                let replaceWith = pair[1]
                /*string3 = string1.split(search).join(replaceWith) - альтернативный вариант:
                разбиваем строку на части, затем соединям части через заменяющую строку между частями.*/
                string3 = string1.replaceAll(search, replaceWith) // метод замены всех вхождений строк напрямую
                string1 = string3
            }
            return string3
        }
    }
}

/*const changeScene = censor();
changeScene('PHP','JS');
changeScene('backend', 'frontend')
console.log(changeScene('PHPis the most popular programming PHP backend language for backend web-developmentbackend'));*/

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

order.push(products[2])
console.log(order)
