// Пример использования:
// const rect1 = new Rectangle(5, 6);
// console.log(rect1.area()) // должен вернуть 30

class Rectangle {
    constructor(width, height)
    {
        this._width = width
        this._height = height
    }

    area ()
    {
        return this._width * this._height
    }
}

const rect1 = new Rectangle(5, 6);
console.log(rect1.area()) // должен вернуть 30
