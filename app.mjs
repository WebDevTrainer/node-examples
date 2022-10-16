// Node 12 - execute using commmand 'node --experimental-modules app.mjs'
// Node 13+ - execute using command 'node app.mjs'
import rect from "./rectangle.mjs";

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("Error: ", err.message);
    } else {
      console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
      console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
    }
  });
  console.log("This statement is called after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);