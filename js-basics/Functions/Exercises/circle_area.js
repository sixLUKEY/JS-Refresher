const circle = {
    radius: 12,
    get area(){
        return Math.PI * this.radius * this.radius
    }
}

circle.area = 50;

console.log( circle.area );