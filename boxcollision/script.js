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

    ctx3.rect(fixedX, fixedY, width, height);
    ctx3.fill();
    const boxThreeDimension = { x: fixedX, y: fixedY, w: width, h: height }
    return boxThreeDimension;
};

const isBoxColliding = (boxOne, boxTwo, boxThree) => {
    const boxOneDimension = boxOne();
    const boxTwoDimension = boxTwo();
    const boxThreeDimension = boxThree();

    const boxOneLeft = boxOneDimension.x
    const boxOneRight = boxOneDimension.x + boxOneDimension.w
    const boxOneTop = boxOneDimension.y
    const boxOneBottom = boxOneDimension.y + boxOneDimension.h

    const boxTwoLeft = boxTwoDimension.x
    const boxTwoRight = boxTwoDimension.x + boxTwoDimension.w
    const boxTwoTop = boxTwoDimension.y
    const boxTwoBottom = boxTwoDimension.y + boxTwoDimension.h

    const boxThreeLeft = boxThreeDimension.x
    const boxThreeLeftRight = boxThreeDimension.x + boxThreeDimension.w
    const boxThreeLeftTop = boxThreeDimension.y
    const boxThreeLeftBottom = boxThreeDimension.y + boxThreeDimension.h


}

isBoxColliding(boxOne, boxTwo, boxThree)