function parseCount (value) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
        const err = new Error("Невалидное значение");
        throw err;
    }
    return parsedValue;
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            const err = new Error ( "Треугольник с такими сторонами не существует");
            throw err;
        }

    }
    getPerimeter () {
        return this.a + this.b + this.c;
    }
    getArea () {
        let p = 1 / 2 * this.getPerimeter();
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle (a, b, c) {
    try {
    	return new Triangle(a, b, c);
    } catch {
    	return {
    		getArea() {
    			return `Ошибка! Треугольник не существует`;
    		},
    		getPerimeter() {
    			return `Ошибка! Треугольник не существует`;
    		}
    	}
    }
}