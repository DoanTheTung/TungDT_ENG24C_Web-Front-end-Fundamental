const rectangle = {
    width: 10,
    height: 5,
    getArea: function () {
        return this.width * this.height
    }
}

const area = rectangle.getArea();
console.log(area);