const boxOne = () => {

    const rectOne = document.getElementById('rect');
    const ctx = rectOne.getContext('2d');
    const arrOfColors = ["blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "red", "white"];
    const randomIndexOfCarr = Math.random(arrOfColors.length) * arrOfColors.length;
    const fixedRandomIndexOfCArr = Math.ceil(randomIndexOfCarr);
    ctx.fillStyle = arrOfColors[fixedRandomIndexOfCArr];

    ctx.beginPath();
    const x = Math.random(5) * 470;
    const y = Math.random(5) * 470;
    const fixedXvalue = Math.ceil(x);
    const fixedYvalue = Math.ceil(y);
    const width = 30;
    const height = 30;
    ctx.rect(fixedXvalue, fixedYvalue, width, height);
    ctx.fill();
    ctx.clearRect(470, 470, 500, 500);

    const boxOneDimension = { x: fixedXvalue, y: fixedYvalue, w: width, h: height }
    return boxOneDimension;
};

const boxTwo = () => {
    const rectTwo = document.getElementById('rect');
    const ctx2 = rectTwo.getContext('2d');
    const arrOfColors = ["blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "red", "white"];
    const randomIndex = Math.random(arrOfColors.length) * arrOfColors.length
    const fixedRandomIndex = Math.ceil(randomIndex);
    ctx2.fillStyle = arrOfColors.reverse()[fixedRandomIndex];

    ctx2.beginPath();
    const x = Math.random(5) * 470;
    const y = Math.random(5) * 470;
    const fixedX = Math.ceil(x);
    const fixedY = Math.ceil(y);
    const width = 30;
    const height = 30;
    ctx2.clearRect(470, 470, 500, 500);

    ctx2.rect(fixedX, fixedY, width, height);
    ctx2.fill();
    const boxTwoDimension = { x: fixedX, y: fixedY, w: width, h: height }
    return boxTwoDimension;
};

const boxThree = () => {
    const rectTwo = document.getElementById('rect');
    const ctx3 = rectTwo.getContext('2d');
    const arrOfColors = ["blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "red", "white"];
    const randomIndex = Math.random(arrOfColors.length) * arrOfColors.length
    const fixedRandomIndex = Math.ceil(randomIndex);
    ctx3.fillStyle = arrOfColors.reverse()[fixedRandomIndex];
    ctx3.beginPath();
    const x = Math.random(5) * 480;
    const y = Math.random(5) * 480;
    const fixedX = Math.ceil(x);
    const fixedY = Math.ceil(y);
    const width = 20;
    const height = 20;
    ctx3.clearRect(480, 480, 500, 500);

    ctx3.rect(fixedX, fixedY, width, height);
    ctx3.fill();
    const boxThreeDimension = { x: fixedX, y: fixedY, w: width, h: height }
    return boxThreeDimension;
};

const isBoxColliding = (boxOne, boxTwo, boxThree) => {
    const rectOne = boxOne();
    const rectTwo = boxTwo();
    const rectThree = boxThree();

    const boxOneLeft = rectOne.x
    const boxOneRight = rectOne.x + rectOne.w
    const boxOneTop = rectOne.y
    const boxOneBottom = rectOne.y + rectOne.h
    const boxOneDimension = { left: boxOneLeft, right: boxOneRight, top: boxOneTop, bottom: boxOneBottom }

    const boxTwoLeft = rectTwo.x
    const boxTwoRight = rectTwo.x + rectTwo.w
    const boxTwoTop = rectTwo.y
    const boxTwoBottom = rectTwo.y + rectTwo.h
    const boxTwoDimension = { left: boxTwoLeft, right: boxTwoRight, top: boxTwoTop, bottom: boxTwoBottom }

    const boxThreeLeft = rectThree.x
    const boxThreeRight = rectThree.x + rectThree.w
    const boxThreeTop = rectThree.y
    const boxThreeBottom = rectThree.y + rectThree.h
    const boxThreeDimension = { left: boxThreeLeft, right: boxThreeRight, top: boxThreeTop, bottom: boxThreeBottom }

    // Check collision 
    // console.log(boxOneDimension);
    // console.log(boxTwoDimension);
    // console.log(boxThreeDimension);
}

function moveBoxes() {
    const interverId = setInterval(() => isBoxColliding(boxOne, boxTwo, boxThree), 100);
    console.log(interverId);
}
// moveBoxes();
