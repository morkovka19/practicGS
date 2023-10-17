const pi = 3.14;

class AreaCalculator {
    constructor(arrFig){
        this._arrFig = arrFig;
    }

    sum(){
        const sum = this._arrFig.reduce((sum, item) => {
            return sum += item.square();
        }, 0)
        return sum;
    }
}


class Circle{
    constructor(r){
        this._radios = r;
    }

    square(){
        return pi * Math.pow(this._radios,2);
    }
}

class Square{
    constructor(a){
        this._a = a;
    }

    square(){
        return this._a * this._a;
    }
}

const area = new AreaCalculator([new Square(10), new Circle(5), new Circle(10)])
console.log(area.sum())
