//Object
console.log("Hello Guru");
// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("Draw");
//   },
// };

//Factories function
// function CreateCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("Draw");
//     },
//   };
// }
// CreateCircle(1).draw();

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
let another= new Circle(1).draw();



