// const isBoxesColliding = (rect1, rect2) => {
//     console.log(rect1);
//     console.log(rect2);

//     const boxOneDimension = { left: rect1.x1, right: rect1.x1 + rect1.w1, top: rect1.y1, bottom: rect1.y1 + rect1.h1 };
//     const boxTwoDimension = { left: rect2.x2, right: rect2.x2 + rect2.w2, top: rect2.y2, bottom: rect2.y2 + rect2.h2 };
//     console.log(boxOneDimension);
//     console.log(boxTwoDimension);

//     // Conditions of checking if box are colliding

//     // If box 1 is compeletly above box 2
//     // If box2 is compeletly on right of box1
//     return (
//         boxOneDimension.bottom > boxTwoDimension.top &&
//         boxTwoDimension.top < boxOneDimension.bottom &&
//         boxOneDimension.right > boxTwoDimension.left &&
//         boxTwoDimension.left < boxOneDimension.right
//     )

// };

// const rect1 = { x1: 50, y1: 50, w1: 100, h1: 100 };
// const rect2 = { x2: 120, y2: 120, w2: 80, h2: 80 };

// if (isBoxesColliding(rect1, rect2)) {
//     console.log("Box are colliding")
// } else {
//     console.log('Box are not colliding')
// }


// Find if box are colliding
// Math Concept used to find if box are colliding : AABB(Axis Alligned Bounding Box)
// const isColliding = (box1, box2) => {

//     const box1Dimension = { left: box1.x1, right: box1.x1 + box1.w1, top: box1.y1, bottom: box1.y1 + box1.h1 };
//     const box2Dimension = { left: box2.x2, right: box2.x2 + box2.w2, top: box2.y2, bottom: box2.y2 + box2.h2 };
//     console.log('Box 1 Dimension: ', box1Dimension);
//     console.log('Box 2 Dimension: ', box2Dimension);

//     return (
//         // if box1 bottom is > than box2 top
//         box1Dimension.bottom > box2Dimension.top &&
//         box2Dimension.top < box1Dimension.bottom &&
//         box1Dimension.right > box2Dimension.left &&
//         box2Dimension.left < box1Dimension.right
//     );
// }

// const box1 = { x1: 30, y1: 10, w1: 100, h1: 80 }
// const box2 = { x2: 20, y2: 5, w2: 80, h2: 60 }

// if (isColliding(box1, box2)) {
//     console.log("Box are colliding");
// } else {
//     console.log("Box are not colliding");
// }


// Math concept 2 for box collision game
// Vector and their application

// What are vectors
// A vector is a quantity that has both magnitude and directions
// Magnitude: (length and size)
// Direction: Where this point
// In 2D space a vector can be represented as v  = (x,y)
// X is horizontal movement along in x axis
// Y is vertical movement along in y axis


// Oparations in vector
// 1. Vector addition  // 2.Subtraction
// Magnitute of vector
// The magnitue (length) is the distance from (x,y)
// || v || is the length of vector

// const magnitudeOfVector = (vector) => {
//     const xRoot = vector.x * vector.x;
//     const yRoot = vector.y * vector.y;
//     const magnitude = Math.sqrt(xRoot + yRoot);
//     return magnitude;
// }

// const vector = { x: 4, y: 3 };
// const vectorMagnitude = magnitudeOfVector(vector);
// console.log("Vector mag: ", vectorMagnitude);

// Operation if vector
// Addition
// const vector1 = { x1: 10, y1: 5 }
// const vector2 = { x2: 10, y2: 5 }
// // (x1+x2,y1+y2)
// const addVector = (vector1, vector2) => {
//     const x = vector1.x1 + vector2.x2;
//     const y = vector1.y1 + vector2.y2;
//     return x + y;
// };

// console.log(addVector(vector1, vector2));

// Subtraction of vectors
// const subtractVectors = (vector1, vector2) => {
//     const x = vector1.x1 - vector2.x2;
//     const y = vector1.y1 - vector2.y2;
//     return x - y;
// };

// const vector1 = { x1: 30, y1: 40 };
// const vector2 = { x2: 10, y2: 15 };

// console.log('Subtraction of vectors: ', subtractVectors(vector1, vector2));

// Magnitude (length) of vectors

// const magnitudeOfVector = (vector) => {
//     const x = vector.x * vector.x;
//     const y = vector.y * vector.y;
//     const root = Math.sqrt(x + y);
//     return root;
// }
// const vector = { x: 3, y: 4 };

// console.log("Magnitude of vector: ", magnitudeOfVector(vector));

// Normalazitaion of vector
// To normalize a vector divide it by its magnitude, A unit vector has a length of 1 but retains its direction
// const normalizeVector = (vector) => {
//     // First find magnitude of vector
//     const x = vector.x * vector.x;
//     const y = vector.y * vector.y;
//     const magnitude = Math.sqrt(x + y);
//     const normalX = vector.x / magnitude;
//     const normalY = vector.y / magnitude;
//     return `${normalX}, ${normalY}`;
// }

// const vector = { x: 3, y: 4 };

// console.log("Normal Vector: ", normalizeVector(vector));


// Scaling a vector
// To scale a vector multiply it by a scalor (a single number);

const scaleVector = (vector, scalor) => {
    const x = vector.x * scalor;
    const y = vector.y * scalor;
    const scalledVector = { x: x, y: y };
    return scalledVector;
}

const vector = { x: 2, y: 3 };
const scalor = 2;

console.log("Scalled vector: ", scaleVector(vector, scalor));
