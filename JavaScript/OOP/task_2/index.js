class Temperature {
    constructor(number) {
        this._celsius = number
        this._fahrenheit = Math.round((this.celsius * 1.8) + 32)
    }

    get celsius ()
    {
        return this._celsius
    }

    get fahrenheit ()
    {
        return this._fahrenheit
    }

    set celsius (number)
    {
        this._celsius = number
    }

    set fahrenheit (number)
    {
        this._fahrenheit = number
    }

    static fromFahrenheit(number)
    {
        const c = Math.round((number - 32) / 1.8)
        return new Temperature(c)
    }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

console.log(day1.celsius);
console.log(day1.fahrenheit);

const day2 = new Temperature(24);

const day3 = Temperature.fromFahrenheit(88);

console.log(day3.celsius);
console.log(day3.fahrenheit);
