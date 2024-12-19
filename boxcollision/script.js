const isBoxesColliding = (rect1, rect2) => {
    console.log(rect1);
    console.log(rect2);

    const boxOneDimension = { left: rect1.x1, right: rect1.x1 + rect1.w1, top: rect1.y1, bottom: rect1.y1 + rect1.h1 };
    const boxTwoDimension = { left: rect2.x2, right: rect2.x2 + rect2.w2, top: rect2.y2, bottom: rect2.y2 + rect2.h2 };
    console.log(boxOneDimension);
    console.log(boxTwoDimension);

    // Conditions of checking if box are colliding

    // If box 1 is compeletly above box 2
    // If box2 is compeletly on right of box1
    return (
        boxOneDimension.bottom > boxTwoDimension.top &&
        boxTwoDimension.top < boxOneDimension.bottom &&
        boxOneDimension.right > boxTwoDimension.left &&
        boxTwoDimension.left < boxOneDimension.right
    )

};

const rect1 = { x1: 50, y1: 50, w1: 100, h1: 100 };
const rect2 = { x2: 120, y2: 120, w2: 80, h2: 80 };

if (isBoxesColliding(rect1, rect2)) {
    console.log("Box are colliding")
} else {
    console.log('Box are not colliding')
}
