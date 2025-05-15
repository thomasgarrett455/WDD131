// const PI = 3.14;
// const radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log("Area1:", area);
// const radius1 = 4;
// area = radius1 * radius1 * PI;
// console.log("Area2:", area);

const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius * PI;
  return area;
}
area = circleArea(3);
console.log("Area1:", area);
// radius = 4;
area = circleArea(4);
console.log("Area2:", area);